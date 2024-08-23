const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()


const jwt = require("jsonwebtoken");
const requireLogin = require("../middleWares/requireLogin");
// const LOGO = mongoose.model("LOGO")
const ECONOMY = mongoose.model("ECONOMY");
const FINANCIAL = mongoose.model("FINANCIAL");
const TECHNICAL = mongoose.model("TECHNICAL");
const OTHERS = mongoose.model("OTHERS");
const ALLBLOGS = mongoose.model("ALLBLOGS");




// ======================================================================================================================
//for LOGO
router.post('/createEconomy' ,requireLogin,  (req,res) => {
    const {title , desc , pic , detailDesc , about , link} = req.body;
    if(!title || !desc ||!pic || !detailDesc || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new ECONOMY({
        title,
        desc,
        pic:pic,
        detailDesc,
        about,
        link,
        postedBy :  req.user
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))



    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))

    
    // res.json('Item added')
})
router.get("/allEconomies" ,requireLogin, (req,res) => {
    // console.log(req.merchant._id)
    ECONOMY.find({postedBy : req.user._id})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteEconomy/:economyid" , async(req , res) => {
    

    ECONOMY.findOne({_id : req.params.economyid}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================


router.post('/createFinancial' ,requireLogin ,   (req,res) => {
    const {title , desc , pic , link , about , detailDesc} = req.body;
    if(!title || !desc ||!pic || !detailDesc || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new FINANCIAL({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))


    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allFinancial" ,requireLogin, (req,res) => {
    // console.log(req.merchant._id)
    FINANCIAL.find({postedBy : req.user._id})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteFinancial/:id" , async(req , res) => {
    

    FINANCIAL.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})


// ======================================================================================================================

router.post('/createTecnical' ,requireLogin,  (req,res) => {
    const {title , desc , pic , link , about, detailDesc} = req.body;
    if(!title || !desc ||!pic || !detailDesc || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new TECHNICAL({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))

    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allTechnical",requireLogin , (req,res) => {
    // console.log(req.merchant._id)
    TECHNICAL.find({postedBy : req.user._id})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteTecnical/:id" , async(req , res) => {
    

    TECHNICAL.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================
router.post('/createOthers',requireLogin ,  (req,res) => {
    const {title , desc , pic , link , about , detailDesc} = req.body;
    if(!title || !desc ||!pic || !detailDesc || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new OTHERS({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))


    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
        postedBy :  req.user,
        detailDesc
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allOthers",requireLogin , (req,res) => {
    // console.log(req.merchant._id)
    OTHERS.find({postedBy : req.user._id})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteOthers/:id" , async(req , res) => {
    

    OTHERS.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================


router.get("/allblogs",requireLogin , (req,res) => {
    // console.log(req.merchant._id)
    ALLBLOGS.find({postedBy : req.user._id})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})

router.delete("/deletehomeblogs/:id" , async(req , res) => {
    

    ALLBLOGS.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})


// router.get("/everyblogs" , (req,res) => {
//     // console.log(req.merchant._id)
//     ALLBLOGS.find()
//     .populate("postedBy" , "_id name Photo")
//     .then(myposts => {
//         res.json(myposts)
//     })
// })

router.get("/everyblogs", (req, res) => {
    ALLBLOGS.find()
      .populate("postedBy", "_id name Photo")
      .sort({ createdAt: -1 })  // Sort by createdAt in descending order (latest first)
      .then(myposts => {
        res.json(myposts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });


  router.get("/everyeconomy", (req, res) => {
    ECONOMY.find()
      .populate("postedBy", "_id name Photo")
      .sort({ createdAt: -1 })  // Sort by createdAt in descending order (latest first)
      .then(myposts => {
        res.json(myposts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });

  router.get("/everyfinancial", (req, res) => {
    FINANCIAL.find()
      .populate("postedBy", "_id name Photo")
      .sort({ createdAt: -1 })  // Sort by createdAt in descending order (latest first)
      .then(myposts => {
        res.json(myposts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });


  router.get("/everytecnical", (req, res) => {
    TECHNICAL.find()
      .populate("postedBy", "_id name Photo")
      .sort({ createdAt: -1 })  // Sort by createdAt in descending order (latest first)
      .then(myposts => {
        res.json(myposts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });


  router.get("/everyothers", (req, res) => {
    OTHERS.find()
      .populate("postedBy", "_id name Photo")
      .sort({ createdAt: -1 })  // Sort by createdAt in descending order (latest first)
      .then(myposts => {
        res.json(myposts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });



  router.get("/paticularblogs/:blogid" , (req,res) => {
    // console.log(req.merchant._id)
    ALLBLOGS.find({_id : req.params.blogid})
    .populate("postedBy" , "_id name Photo")
    .then(myposts => {
        res.json(myposts)
    })
})


module.exports = router;