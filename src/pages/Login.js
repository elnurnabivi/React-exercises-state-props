// 3. Create Login which takes username and password and after that shows a page where you are
// greeted with your username; add username to state
import { useState } from "react";
import Welcome from "./welcome";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  function usernameChange(event) {
    setUsername(event.target.value);
  }
  function passwordChange(event) {
    setPassword(event.target.value);
  }
  function handleLogin() {
    if (username && password) {
      setLoggedIn(true);
    }
  }
  return (
    <div>
      {loggedIn ? (
        <Welcome username={username} />
      ) : (
        <div>
          <h2>Login page</h2>
          <p>Username</p>
          <input type="text" value={username} onChange={usernameChange}></input>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={passwordChange}
          ></input>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
