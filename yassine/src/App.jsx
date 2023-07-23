import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coaches from "./components/Coaches";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Book from "./components/Book";
import Error from "./components/Error";
import French from "./components/french";
import JointTeam from "./components/JointTeam";

import "./index.css";
import Personalize from "./components/Personalize";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coaches" element={<Coaches />} />
          <Route exact path="/program" element={<Program />} />
          <Route exact path="/jointeam" element={<JointTeam />} />
          <Route exact path="/personalized" element={<Personalize />} />
          <Route exact path="/book" element={<Book />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/french" element={<French />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
