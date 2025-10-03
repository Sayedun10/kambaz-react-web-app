import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control className="wd-username mb-2" defaultValue="alice" placeholder="username" />
      <Form.Control className="wd-password mb-2" defaultValue="123" placeholder="password" type="password" />
      <Form.Control className="mb-2" defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <Form.Control className="mb-2" defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" />
      <Form.Control className="mb-2" defaultValue="2000-01-01" type="date" id="wd-dob" />
      <Form.Control className="mb-2" defaultValue="alice@wonderland" type="email" id="wd-email" />
      <Form.Control as="select" className="mb-2" defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Control>
      <Button variant="danger" className="w-100">
        <Link to="/Kambaz/Account/Signin" className="text-white text-decoration-none">Sign out</Link>
      </Button>
    </div>
  );
}