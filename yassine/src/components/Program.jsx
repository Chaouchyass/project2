import React from "react";
import { NavLink } from "react-router-dom";

const Program = () => {
  return (
    <>
      <section className="main_section">
        <h1 className="main">OUR PROGRAMS</h1>

        <div className="main_buttons">
          <div className="btn">
            <NavLink to="/jointeam">
              <button className="link">JOIN THE TEAM</button>
            </NavLink>
            <br />
            <NavLink to="/personalized">
              <button className="link">GET A PERSONALIZED COACH</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
