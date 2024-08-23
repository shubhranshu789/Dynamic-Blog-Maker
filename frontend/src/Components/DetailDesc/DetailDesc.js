import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Home/OtherUsersBlogs/UserNavBar';
import './DetailDesc.css'

function DetailDesc() {

  const { blogid } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/paticularblogs/${blogid}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          // notifyA(data.error)
          console.log(data.error);


        } else {
          // notifyB(data.message)
          // alert(data.message)
          // navigate('/')
          setData(data);
        }
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [blogid]);


  const chk = () => {
    console.log(data);

  }

  return (
    <div>
      <Navbar />

      {/* <button onClick={() => { chk() }}>check</button> */}
      {/* <p>{blogid}</p> */}

      <div className="DetailMain">
        <div className="headingOuter">
          <div className="detailHeading">
            <h1>Heading: {data.length > 0 && data[0].about}</h1>
            <p>Desc1: {data.length > 0 && data[0].desc}</p>
          </div>
        </div>

        <div className="detailImg">
          <img src={data.length > 0 && data[0].pic} alt="Blog Illustration" />
        </div>

        <div className="detailDesc">
          <p>Desc2: {data.length > 0 && data[0].detailDesc}</p>
        </div>
      </div>


    </div>
  )
}

export default DetailDesc


// about
// :
// "HEading"
// createdAt
// :
// "2024-08-07T14:24:48.119Z"
// desc
// :
// "Desc1"
// detailDesc
// :
// "Desc2"
// link
// :
// ""
// pic
// :
// "http://res.cloudinary.com/shubh1234/image/upload/v1723040687/xoqswjqkqwb3kgbsvw42.jpg"
// postedBy
// :
// {_id: '6659d1262a9f34812e8bfe1f', name: 'shubh'}
// title
// :
// "Technical"