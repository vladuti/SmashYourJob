import "../css/Login.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

interface Prop {
  display: boolean;
}

export const Login = ({ display }: Prop) => {
  const [name, setName] = useState("");

  if (display) {
    return (
      <center>
        <div className="mapare">
          <div className="coboara">
            <h1>
              <strong />
              SMASH-YOUR-JOB
            </h1>
            <input
              className="textField"
              id="user"
              type="Text"
              placeholder="User"
            />
            <br />
            <input
              className="textField"
              id="password"
              type="Text"
              placeholder="Passwod"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button id="login" type="button" className="btn btn-danger">
              Log in
            </button>
          </div>
        </div>
      </center>
    );
  }
};

export default Login;
