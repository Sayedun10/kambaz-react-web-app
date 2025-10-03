import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <Form.Control className="wd-username mb-2" placeholder="username" />
      <Form.Control className="wd-password mb-2" placeholder="password" type="password" />
      <Link id="wd-signin-btn" to="/Kambaz/Dashboard" className="btn btn-primary w-100 mb-2">
        Sign in
      </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}