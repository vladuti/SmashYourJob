import { useState } from "react";
import "../css/App.css";
import "./Login";
import Login from "./Login";
import Signin from "./Signin";
import legalImage from "../poze/protected.png";
import careerImage from "../poze/career.png";
import socialImage from "../poze/social.png";
import "./Jobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobs from "./Jobs";
import Courses from "./Courses";

function App() {
  const [loginAux, setLoginAux] = useState(false);
  const [signin, setSignin] = useState(false);
  const [courses, setCourses] = useState(false);

  const handleClick = () => {
    setLoginAux(true);
    setSignin(false);
  };

  const afiseazaCourses = () => {
    setLoginAux(false);
    setSignin(false);
    setCourses(true);
  };

  const handleSignIn = () => {
    setLoginAux(false);
    setSignin(true);
  };

  return (
    <>
      <div className="navbarcss">
        <nav className="navbar navbar-expand-lg  .navbar">
          <div className="container-fluid ">
            <a className="nav-link active " href="/">
              <h3 className="dreapta">SmashYourJob</h3>
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link  " aria-current="page" href="Jobs">
                    <h5>Jobs</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h5>Companies</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={afiseazaCourses}>
                    <h5> Courses</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleClick}>
                    <h6 className="logs2"> LogIn</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h6 className="logs1" onClick={handleSignIn}>
                      SignUp
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="banipespate">
        <div>
          <Login display={loginAux}></Login>
          <Signin display={signin}></Signin>
        </div>

        <div>
          <Courses display={courses}></Courses>
        </div>

        <div className="padd100">
          <Router>
            <div>
              <Routes>
                <Route path="/Jobs" element={<Jobs />} />
              </Routes>
            </div>
          </Router>
        </div>

        <div className="jos">
          <center>
            <b>
              <h5>@Contact</h5>
            </b>
            <h6>EmailOficial@proiect.EchipaDeSoc</h6>
            <b>
              <h4>AboutUs</h4>
            </b>
            <div className="container text-center coloane">
              <div className="row">
                <div className="col">
                  <h5>
                    <b>Legal</b>
                  </h5>
                  <img className="legal" src={legalImage} alt="" />
                </div>
                <div className="col">
                  <h5>
                    <b>Careers</b>
                  </h5>
                  <img className="legal" src={careerImage} alt="" />
                </div>
                <div className="col">
                  <h5>
                    <b>Social</b>
                  </h5>
                  <img className="legal" src={socialImage} alt="" />
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default App;
