import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../../Assignments/client";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<any[]>([]);

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    setAssignments(assignments);
  };

  const deleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    setAssignments(assignments.filter((a) => a._id !== assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments">
      <div className="d-flex mb-3">
        <input
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="form-control me-2"
        />
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
          <FaPlus className="me-1" /> Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger">
          <FaPlus className="me-1" /> Assignment
        </button>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
            <IoEllipsisVertical className="float-end fs-4" />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((a: any) => (
              <li
                key={a._id}
                className="wd-assignment-list-item list-group-item p-3 ps-1"
              >
                <BsGripVertical className="me-2 fs-3" />
                <a
                  href={`#/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                  className="wd-assignment-link text-dark text-decoration-none"
                >
                  {a.title}
                </a>
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => deleteAssignment(a._id)}
                >
                  Delete
                </button>
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
                <br />
                <small className="text-muted">
                  Multiple Modules | Not available until {a.availableDate} | Due{" "}
                  {a.dueDate} | {a.points} pts
                </small>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
