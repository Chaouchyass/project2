import React, { useState } from "react";
import data from "./Accordians";
import mapss from "../images/map.jpg";

const Contact = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <section className="main_section">
        <h1 className="main">Club Office Contact</h1>

        <div className="content_flex">
          <div className="left">
            <div className="button">
              <button>801 King Edward ave, Ottawa</button>
              <button>+1-514-111-1111</button>
            </div>
            <div className="map">
              <img src={mapss} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="right-flex">
              <div className="line"></div>

              <div className="table">
                <h1>Opening Hours</h1>
                <div className="tble_flex">
                  <div className="data">
                    <h3>MONDAY</h3>
                    <h3>9am-6pm</h3>
                  </div>

                  <div className="data">
                    <h3>TUESDAY</h3>
                    <h3>9am-6pm</h3>
                  </div>

                  <div className="data">
                    <h3>WEDNESDAY</h3>
                    <h3>9am-6pm</h3>
                  </div>

                  <div className="data">
                    <h3>THURSDAY</h3>
                    <h3>9am-6pm</h3>
                  </div>

                  <div className="data">
                    <h3>FRIDAY</h3>
                    <h3>10am-8pm</h3>
                  </div>

                  <div className="data">
                    <h3>SATURDAY</h3>
                    <h3>10am-6pm</h3>
                  </div>

                  <div className="data">
                    <h3>SUNDAY</h3>
                    <h3>Closed</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordian_area">
          {data.map((item, i) => {
            return (
              <div className="accordians" key={i}>
                <div className="accor_flex" onClick={() => toggle(i)}>
                  <h3>{item.Question}</h3>
                  <span>{selected == i ? "-" : "+"}</span>
                </div>
                <div className={selected == i ? "answer show" : "answer"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Contact;
