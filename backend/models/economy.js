const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types



const economySchema = new mongoose.Schema({
    title : {
        type:String,
        require:true
    },
    desc:{
        type: String,
        require:true
    },
    link:{
        type: String,
        require:true,
        default : ""
    },
    about:{
        type: String,
        require:true
    },
    pic : {
        type:String,
        require : true,
        // default : "https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    postedBy:{
        type : ObjectId,
        ref : "ADMIN"
    },
    detailDesc:{
        type: String,
        require:true
    }
})

mongoose.model("ECONOMY" , economySchema)