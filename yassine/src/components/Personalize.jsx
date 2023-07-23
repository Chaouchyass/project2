import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pTeam from "../images/image3.jpg";

const Personalize = () => {
  const [input, setInput] = useState(true);

  return (
    <>
      <section className="main_section">
        <div className="main_buttons">
          <div className="btn">
            <NavLink to="/jointeam">
              <button className="link space clear">JOIN THE TEAM</button>
            </NavLink>
          </div>
        </div>

        <div className="service">
          <h2>GET A PERSONALIZED COACH</h2>
          <hr />

          <div className="service_flex">
            <div className="left">
              <h3>Description of selected service:</h3>
              <li>Price: 35$ (80 minutes)</li>
              <li>Required ages : 4+</li>
              <li>Timing: Check ‘coaches’ section</li>
              <button onClick={() => setInput(false)}>Join Now</button>
            </div>
            <div className="right">
              <img src={pTeam} className="imgg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="main_section">
        {input ? null : (
          <>
            <h1 className="heading">CHECKOUT</h1>
            <div className="form">
              <form>
                <div className="inputs">
                  <div className="left">
                    <label htmlFor="">FIRST NAME</label>
                    <input type="text" placeholder="Enter your first name*" />
                  </div>

                  <div className="left">
                    <label htmlFor="">LAST NAME</label>
                    <input type="text" placeholder="Enter your last name*" />
                  </div>
                </div>

                <div className="inputs">
                  <div className="left">
                    <label htmlFor="">BIRTDATE</label>
                    <input type="number" placeholder="Enter your birth date*" />
                  </div>

                  <div className="left">
                    <label htmlFor="">ADRESS</label>
                    <input type="text" placeholder="Enter your adress*" />
                  </div>
                </div>

                <div className="inputs">
                  <div className="left">
                    <label htmlFor="">PHONE NO</label>
                    <input
                      type="number"
                      placeholder="Enter your phone number*"
                    />
                  </div>

                  <div className="left">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter your email*" />
                  </div>
                </div>
                <button>SUBMIT</button>
              </form>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Personalize;
