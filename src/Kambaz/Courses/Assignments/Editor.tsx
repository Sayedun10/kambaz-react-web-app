import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const isNewAssignment = aid === "new";

  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "Assignment description",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableDate: new Date().toISOString().split("T")[0],
    availableUntil: new Date().toISOString().split("T")[0],
    course: cid,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isNewAssignment) {
      fetchAssignment();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchAssignment = async () => {
    try {
      const fetchedAssignment = await client.findAssignmentById(aid as string);
      setAssignment(fetchedAssignment);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching assignment:", error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (isNewAssignment) {
        await client.createAssignment(cid as string, assignment);
      } else {
        await client.updateAssignment(aid as string, assignment);
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment.");
    }
  };

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </Form.Group>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Points</Form.Label>
        <div className="col-sm-9">
          <Form.Control
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Due Date</Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="date"
            id="wd-due-date"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Available From</Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="date"
            id="wd-available-from"
            value={assignment.availableDate}
            onChange={(e) =>
              setAssignment({ ...assignment, availableDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Available Until</Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="date"
            id="wd-available-until"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </div>
      </div>

      <hr />
      <div className="float-end">
        <Button
          variant="secondary"
          className="me-2"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
        >
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
