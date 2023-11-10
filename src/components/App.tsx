import { useState } from "react";
import "../css/App.css";
import "./Login";
import Login from "./Login";

function App() {
  const [loginAux, setLoginAux] = useState(false);

  const handleClick = () => {
    setLoginAux(true);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navcss ">
          <div className="container-fluid ">
            <a className="nav-link active " href="#">
              <h3 className="dreapta">SmashYourJ🥵b</h3>
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
                  <a className="nav-link  " aria-current="page" href="#">
                    <h5>Jobs</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h5>Companies</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h5> Courses</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleClick}>
                    <h6 className="logs2"> Login</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h6 className="logs1"> SignUp</h6>
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
                </div>
                <div className="col">
                  <h5>
                    <b>Careers</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    <b>Social</b>
                  </h5>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
      <center></center>
    </>
  );
}

export default App;
