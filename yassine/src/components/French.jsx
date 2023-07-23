import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../images/image1.jpg";
import field1 from "../images/field1.jpg";
import field2 from "../images/field 2.png";
import field3 from "../images/field 3.jpg";

const French = () => {
  return (
    <>
      <div className="language">
        <li>
          <NavLink to="/" className="lan">
            English
          </NavLink>
        </li>
      </div>
      <section className="main_section">
        <div className="flex_box">
          <div className="left">
            <h1>
              Bienvenue au DUNK <br /> IN OTTAWA
            </h1>
            <p>
              Fondé en 2006, Dunk in Ottawa accueille chaque saison Des
              passionnés de basketball pour rejoindre notre équipe, Développer
              leurs compétences et atteindre les plus hauts Niveaux. Nous
              mettons également nos terrains à votre Disposition pour que vous
              puissiez amener votre équipe et organiser des matchs. Vous pouvez
              même planifier des séances individuelles avec un coach pour
              améliorer votre niveau
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
        <h1>Nos Terrains</h1>
        <div className="fields_flex">
          <div className="card">
            <div className="img">
              <img src={field1} alt="" />
            </div>
            <h2>Terrain principal</h2>
          </div>

          <div className="card">
            <div className="img">
              <img src={field2} alt="" />
            </div>
            <h2>Terrain 1</h2>
          </div>

          <div className="card">
            <div className="img">
              <img src={field3} alt="" />
            </div>
            <h2>Terrain 2</h2>
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

export default French;
