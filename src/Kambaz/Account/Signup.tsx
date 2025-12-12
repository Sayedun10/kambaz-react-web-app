import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { Form } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const newUser = await client.signup(user);
      dispatch(setCurrentUser(newUser));
      navigate("/Kambaz/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form.Control
        className="wd-username mb-2"
        placeholder="username"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <Form.Control
        className="wd-password mb-2"
        placeholder="password"
        type="password"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Form.Control
        className="wd-firstname mb-2"
        placeholder="first name"
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <Form.Control
        className="wd-lastname mb-2"
        placeholder="last name"
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <Form.Control
        className="wd-email mb-2"
        placeholder="email"
        type="email"
        value={user.email || ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={signup} className="btn btn-primary w-100 mb-2">
        Sign up
      </button>
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
