import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control className="wd-username mb-2" placeholder="username" />
      <Form.Control className="wd-password mb-2" placeholder="password" type="password" />
      <Form.Control className="wd-password-verify mb-2" placeholder="verify password" type="password" />
      <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}