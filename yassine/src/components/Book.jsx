import React from "react";
import field1 from "../images/field1.jpg";
import field2 from "../images/field 2.png";
import field3 from "../images/field 3.jpg";

const Book = () => {
  return (
    <>
      <section className="main_section">
        <div id="book">
          <h1 className="heading">BOOK FIELD</h1>

          <div className="book_flex">
            <div className="book_card">
              <img src={field1} />
              <button>Main Court</button>
            </div>

            <div className="book_card">
              <img src={field2} />
              <button>Court 1</button>
            </div>

            <div className="book_card">
              <img src={field3} />
              <button>Court 2</button>
            </div>
          </div>
        </div>

        <div className="snd-form">
          <form>
            <div className="BOOK">
              <label htmlFor="">SELECT FIELD</label>
              <select>
                <option value="Select">Main Court</option>
                <option value="Select">Court 1</option>
                <option value="Select">Court 2</option>
              </select>
            </div>

            <div className="BOOK">
              <label htmlFor="">SELECT DATE</label>
              <input type="date" />
            </div>

            <div className="BOOK">
              <label htmlFor="">SELECT TIME</label>
              <input type="time" />
            </div>

            <div className="BOOK">
              <label htmlFor="">SELECT YOUR FULL NAME</label>
              <input type="text" placeholder="FIRST NAME AND LAST NAME" />
            </div>

            <div className="BOOK">
              <label htmlFor="">ENTER PHONE NUMBER</label>
              <input type="number" placeholder="PHONE NUMBER" />
            </div>

            <div className="form_flex">
              <div className="BOOK">
                <label htmlFor="">CREDIT CARD NUMBER</label>
                <input type="number" placeholder="CREDIT CARD NUMBER" />
              </div>
              <div className="BOOK">
                <label htmlFor="">EXP DATE</label>
                <input type="date" placeholder="EXP DATE" />
              </div>
              <div className="BOOK">
                <label htmlFor="">CVV</label>
                <input type="text" placeholder="CVV" />
              </div>
            </div>

            <button>SUBMIT</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Book;
