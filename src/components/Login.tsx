import "../css/Login.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ReactDOM from "react-dom/client";
import { useMutation, useQueries } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";

interface Prop {
  display: boolean;
}

export const Login = ({ display }: Prop) => {
  const [name, setName] = useState("");

  ///////////////////

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const userQuery = useQuery(api.users.getUser, {
    User: username,
    Password: password,
  });

  const handleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Așteaptă rezultatul query-ului
    const result = await userQuery;

    // Verifică rezultatul și afișează un mesaj în consolă sau gestionează în consecință
    if (result && result.length > 0) {
      console.log("Utilizatorul a fost găsit.");
      // Poți face ceva în continuare, de exemplu, să redirecționezi utilizatorul sau să afișezi un mesaj în interfață
    } else {
      console.error("Utilizatorul NU a fost găsit.");
      // Poți trata cazul în care perechea user-password nu a fost găsită
    }
  };
  if (display) {
    return (
      <center>
        <div className="mapare">
          <div className="coboara">
            <form onSubmit={handleLogIn}>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit" className="btn btn-danger">
                Log In
              </button>
            </form>
          </div>
        </div>
      </center>
    );
  }
};

export default Login;
