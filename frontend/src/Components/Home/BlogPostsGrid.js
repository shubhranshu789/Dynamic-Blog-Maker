import BlogPostItems1 from "./BlogPostItems1";
import BlogPostItems from "./BlogPostItems";
import PropTypes from "prop-types";
// import "./CSS/BlogPostsGrid.css";
import "./CSS/blogPostGrid.css";

import pic1 from "../Images/gama.png";
import pic2 from "../Images/alpha.png";
import pic3 from "../Images/beta.png";

import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogPostsGrid = ({ className = "" }) => {
  const [pic, setPic] = useState([]);
  const notifyB = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/allblogs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        // setPosts(result)
        console.log(pic);
      });
  }, []);

  const chk = () => {
    console.log(pic);
  };

  const removePost = (Id) => {
    fetch(`http://localhost:5000/deletehomeblogs/${Id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        notifyB(result.message);
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // You can adjust this number to show more or fewer posts per page

  // Calculate the indexes of the first and last posts on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pic.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(pic.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className={`blog-posts-grid ${className}`}
      data-scroll-to="blogPostsGrid"
    >
      <div className="all-posts-footer">
        <h1 className="all-posts">All posts</h1>
        <div className="all-blogs-divider" />
      </div>

      {/* <BlogPostItems1
        httpswwwpexelscomphototwo={pic1}
        startup="Startup"
        designTipsForDesignersTha="Design tips for designers that cover everything you need"
        buttonText = "VIew More"
        BlogContent = "Design tips for designers that cover everything you need Design tips for designers that cover everything you need"
        buttonLink = "https://www.youtube.com/"
        buttonTextDelete = "Delete"
      /> */}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {currentPosts.map((blogs) => (
        <BlogPostItems1
          key={blogs._id}
          httpswwwpexelscomphototwo={blogs.pic}
          startup={blogs.title}
          designTipsForDesignersTha={blogs.about}
          BlogContent={blogs.desc}
          buttonLink={`/DetailDesc/${blogs._id}`}
          buttonText="View More"
          buttonTextDelete="Delete"
          id={blogs._id}
          removePost={removePost}
        />
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

BlogPostsGrid.propTypes = {
  className: PropTypes.string,
};

export default BlogPostsGrid;
