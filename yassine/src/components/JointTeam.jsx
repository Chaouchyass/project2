import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import jTeam from "../images/image2.jpg";

const JointTeam = () => {
  const [input, setInput] = useState(true);

  return (
    <>
      <section className="main_section">
        <div className="main_buttons">
          <div className="btn">
            <NavLink to="/personalized">
              <button className="link space">GET A PERSONALIZED COACH</button>
            </NavLink>
          </div>
        </div>

        <div className="service">
          <h2>JOIN THE TEAM</h2>
          <hr />

          <div className="service_flex">
            <div className="left">
              <h3 className="h3">
                Experience our tryouts to determine your Level and join the
                team. Gear up with Provided basketball equipment For an exciting
                journey on the court!
              </h3>
              <li>Price: 400$</li>
              <li>Required ages : 9+</li>
              <li>Timing: 4 times a week</li>
              <button className="join" onClick={() => setInput(false)}>
                Join Now
              </button>
            </div>
            <div className="right">
              <img src={jTeam} alt="" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="main_section">
        {input ? (
          false
        ) : (
          <>
            {" "}
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

export default JointTeam;
