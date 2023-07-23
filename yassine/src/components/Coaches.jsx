import React from "react";
import coach1 from "../images/coach 1.jpg";
import coach2 from "../images/coach 2.jpg";
import coach3 from "../images/coach 3.jpg";

const Coaches = () => {
  return (
    <>
      <section className="main_section">
        <h1 className="main">MORE ABOUT OUR COACHES</h1>

        <div className="coaches_data">
          <div className="coaches_card">
            <div className="coachCard">
              <img src={coach1} alt="" />
              <div className="coachData">
                <h2> John Pippen</h2>
                <p>
                  With 20 years of professional coaching experience, Coach John
                  excels in developing both individual and team skills. His
                  advanced training techniques drive athletic performance
                </p>
              </div>
            </div>

            <div className="coachCard">
              <img src={coach2} alt="" />
              <div className="coachData">
                <h2> Adam Collins</h2>
                <p>
                  Former collegiate and professional basketball player, Coach
                  Adam specializes in game tactics & team strategy. He inspires
                  and motivates players to reach their full potential on the
                  court.
                </p>
              </div>
            </div>

            <div className="coachCard">
              <img src={coach3} alt="" />
              <div className="coachData">
                <h2>David Miller</h2>
                <p>
                  With over 10 years of experience in youth basketball, Coach
                  David focuses on developing fundamental skills for beginner
                  players. He creates a positive and supportive environment to
                  foster their growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="main">COACHES CALENDAR</h1>

        <div className="calender">
          <div className="calender_data">
            <table cellSpacing="15">
              <thead>
                <tr>
                  <th>Available times</th>
                  <th>MON</th>
                  <th>TUE</th>
                  <th>WED</th>
                  <th>THU</th>
                  <th>FRI</th>
                  <th>SAT</th>
                  <th>SUN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Pippen</td>
                  <td className="padding">3PM - 9PM</td>
                  <td className="padding"></td>
                  <td className="padding">1 PM - 9 PM</td>
                  <td className="padding"></td>
                  <td className="padding">2 PM - 7 PM</td>
                  <td className="padding"></td>
                  <td className="padding"></td>
                </tr>

                <tr>
                  <td>Adam Collins</td>
                  <td className="padding"></td>
                  <td className="padding">10 AM - 5 PM</td>
                  <td className="padding"></td>
                  <td className="padding">1 PM - 7PM</td>
                  <td className="padding"></td>
                  <td className="padding">9 AM - 5 PM</td>
                  <td className="padding"></td>
                </tr>

                <tr>
                  <td>David Miller</td>
                  <td className="padding">10 AM - 5 PM</td>
                  <td className="padding"></td>
                  <td className="padding">10 AM - 5 PM</td>
                  <td className="padding"></td>
                  <td className="padding"></td>
                  <td className="padding"></td>
                  <td className="padding">10 AM - 5 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coaches;
