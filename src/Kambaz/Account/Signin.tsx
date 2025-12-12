import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { Form } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form.Control
        className="wd-username mb-2"
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <Form.Control
        className="wd-password mb-2"
        placeholder="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
