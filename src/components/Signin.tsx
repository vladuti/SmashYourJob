import React, { useState, ChangeEvent, FormEvent } from "react";
import { useMutation, useQueries } from "convex/react";
import { api } from "../../convex/_generated/api";

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

  const userMutation = useMutation(api.users.addUser);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await userMutation({
      User: username,
      Password: password,
    });
    console.log({ result });
  };
  if (display) {
    return (
      <center>
        <div className="mapare">
          <div className="coboara">
            <form onSubmit={handleSignIn}>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <br />
              </label>
              <br />
              <button type="submit" className="btn btn-danger">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </center>
    );
  }
};

export default Login;
