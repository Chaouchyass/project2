import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../images/image1.jpg";
import field1 from "../images/field1.jpg";
import field2 from "../images/field 2.png";
import field3 from "../images/field 3.jpg";

const Home = () => {
  return (
    <>
      <div className="language">
        <li>
          <NavLink to="/french" className="lan">
            French
          </NavLink>
        </li>
      </div>
      <section className="main_section">
        <div className="flex_box">
          <div className="left">
            <h1>
              WELCOME TO DUNK <br /> IN OTTAWA
            </h1>
            <p>
              Founded in 2006, Dunk in Ottawa welcomes basketball Passions every
              season to join our team, develop theirs Skills and reach the
              highest levels. We also put our courts At your disposal, so you
              can bring your team and play With your friends. You can even
              organize personalized Sessions with a coach to improve your level.
            </p>
          </div>
          <div className="right">
            <div className="image">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="fields">
        <h1>OUR FIELDS</h1>
        <div className="fields_flex">
          <div className="card">
            <div className="img">
              <img src={field1} alt="" />
            </div>
            <h2>Main Court</h2>
          </div>

          <div className="card">
            <div className="img">
              <img src={field2} alt="" />
            </div>
            <h2> Court 1</h2>
          </div>

          <div className="card">
            <div className="img">
              <img src={field3} alt="" />
            </div>
            <h2>Court 2</h2>
          </div>
        </div>
      </div>
      <div className="btn_flex">
        <button>+1-514-111-1111</button>
        <button>801 King Edward ave, Ottawa</button>
      </div>
    </>
  );
};

export default Home;
