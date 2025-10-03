import { Form, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
      <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" /><br />
      
      <Form.Control as="textarea" id="wd-description" rows={10}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
      </Form.Control>
      <br />

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Points</Form.Label>
        <div className="col-sm-9">
          <Form.Control id="wd-points" defaultValue={100} />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Assignment Group</Form.Label>
        <div className="col-sm-9">
          <Form.Control as="select" id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Control>
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Display Grade as</Form.Label>
        <div className="col-sm-9">
          <Form.Control as="select" id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </Form.Control>
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Submission Type</Form.Label>
        <div className="col-sm-9">
          <Form.Control as="select" id="wd-submission-type">
            <option value="ONLINE">Online</option>
          </Form.Control>
          <div className="mt-3">
            <Form.Label>Online Entry Options</Form.Label><br />
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Assign to</Form.Label>
        <div className="col-sm-9">
          <Form.Control id="wd-assign-to" defaultValue="Everyone" />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Due</Form.Label>
        <div className="col-sm-9">
          <Form.Control type="date" id="wd-due-date" defaultValue="2024-05-13" />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Available from</Form.Label>
        <div className="col-sm-9">
          <Form.Control type="date" id="wd-available-from" defaultValue="2024-05-06" />
        </div>
      </div>

      <div className="row mb-3">
        <Form.Label className="col-sm-3">Until</Form.Label>
        <div className="col-sm-9">
          <Form.Control type="date" id="wd-available-until" defaultValue="2024-05-20" />
        </div>
      </div>

      <hr />
      <div className="float-end">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}