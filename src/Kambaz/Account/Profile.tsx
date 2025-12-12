import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const fetchProfile = () => {
    if (!currentUser) {
      navigate("/Kambaz/Account/Signin");
      return;
    }
    setProfile(currentUser);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  const updateProfile = async () => {
    const updatedUser = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedUser));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <>
          <Form.Control
            className="wd-username mb-2"
            value={profile.username || ""}
            placeholder="username"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <Form.Control
            className="wd-password mb-2"
            value={profile.password || ""}
            placeholder="password"
            type="password"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <Form.Control
            className="mb-2"
            value={profile.firstName || ""}
            placeholder="First Name"
            id="wd-firstname"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <Form.Control
            className="mb-2"
            value={profile.lastName || ""}
            placeholder="Last Name"
            id="wd-lastname"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <Form.Control
            className="mb-2"
            value={profile.dob || ""}
            type="date"
            id="wd-dob"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control
            className="mb-2"
            value={profile.email || ""}
            type="email"
            id="wd-email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Form.Control
            as="select"
            className="mb-2"
            value={profile.role || "USER"}
            id="wd-role"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
          <Button
            variant="primary"
            className="w-100 mb-2"
            onClick={updateProfile}
          >
            Update Profile
          </Button>
          <Button variant="danger" className="w-100" onClick={signout}>
            Sign out
          </Button>
        </>
      )}
    </div>
  );
}
