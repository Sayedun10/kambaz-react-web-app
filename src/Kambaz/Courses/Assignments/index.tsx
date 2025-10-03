import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex mb-3">
        <input placeholder="Search for Assignments" id="wd-search-assignment" className="form-control me-2" />
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
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-dark text-decoration-none">
                A1 - ENV + HTML
              </a>
              <div className="float-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
              </small>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link text-dark text-decoration-none">
                A2 - CSS + BOOTSTRAP
              </a>
              <div className="float-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
              </small>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link text-dark text-decoration-none">
                A3 - JAVASCRIPT + REACT
              </a>
              <div className="float-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
              <br />
              <small className="text-muted">
                Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
              </small>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}