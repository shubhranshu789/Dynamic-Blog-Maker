import Item from "../Home/Item";
import PropTypes from "prop-types";
import "./CSS/FrameComponent.css";
import { Link } from "react-router-dom";

import building from '../Images/pngs/building.png'
import other from '../Images/pngs/other.png'
import rocket from '../Images/pngs/rocket.png'
import techbrain from '../Images/pngs/techbrain.png'

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`categories-wrapper ${className}`}>
      <div className="categories">
        <div className="all-categories-wrapper">
          <h1 className="all-categories">All Categories</h1>
        </div>
        <div className="item-parent">

        <Link to={'/technicalblogs'} style={{textDecoration : "none"}}>
          <div className="FrameCardBox" style={{backgroundColor : ""}}>
            <Item icon={techbrain} business="Technical" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
          </div>
        </Link>


          <Link to={'/economyblog'} style={{textDecoration : "none"}}>
            <div className="FrameCardBox" style={{backgroundColor : "#ffec3b"}}>
              <Item icon={building} business="Economic" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
            </div>
          </Link>
          <Link to={'/financilabolgs'} style={{textDecoration : "none"}}>
            <div className="FrameCardBox" style={{backgroundColor : ""}}>
              <Item icon={rocket} business="Financial" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
            </div>
          </Link>

          <Link  to={'/othersblogs'} style={{textDecoration : "none"}}>
          <div className="FrameCardBox" style={{backgroundColor : ""}}>
            <Item icon={other} business="Others" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
          </div>
          </Link>
         



          {/* <div className="item-hover">
            <div className="background3" />
            <img className="item-hover-child" />
            <div className="startup-group">
              <h2 className="startup1">Startup</h2>
              <p className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div> */}

          {/* <Item icon="/icon-2.svg" business="Economy" propMinWidth="118px" /> */}
          {/* <div className="item1">
            <div className="background4" />
            <img
              className="business-and-trade-1-icon"
              loading="lazy"
              alt=""
              src="/businessandtrade-1.svg"
            />
            <div className="technology-group">
              <b className="technology1">Technology</b>
              <p className="lorem-ipsum-dolor2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;