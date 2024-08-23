import Navbar from "./UserNavBar";

// import BlogContent from "../BlogContent";
import BlogContent from "./BlogContentOther";
// import BlogPostsGrid from "../BlogPostsGrid";
import BlogPostsGrid from "../OtherUsersBlogs/BlogPostsGridOthers";
import FrameComponent from "../FrameComponent";
import InputProcessor from "../InputProcessor";
import FooterIcons from "../FooterIcons";
// import "./CSS/Blog.css";
import '../CSS/Blog.css'
import '../CSS/global.css'
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
function UserView() {
  return (
    <div className="blog">
      <Navbar />
      <BlogContent />
      <section className="blog-posts-grid-wrapper">
        <BlogPostsGrid />
      </section>
      {/* <FrameComponent /> */}
      <InputProcessor />
      <FooterIcons />
    

        {/* <div className="logoutBtn">
          <h1 
            onClick={() => {
              // setModalOpen(false);
              localStorage.clear()
              navigate("./signin")
          }}
          >LogOut</h1>
        </div> */}
    </div>
  )
}

export default UserView