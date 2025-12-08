import { Link, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kambaz/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className="list-group-item active border-0"
      >
        Home
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Modules`}
        id="wd-course-modules-link"
        className="list-group-item text-danger border-0"
      >
        Modules
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Piazza`}
        id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"
      >
        Piazza
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Zoom`}
        id="wd-course-zoom-link"
        className="list-group-item text-danger border-0"
      >
        Zoom
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
        className="list-group-item text-danger border-0"
      >
        Assignments
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Quizzes`}
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border-0"
      >
        Quizzes
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Grades`}
        id="wd-course-grades-link"
        className="list-group-item text-danger border-0"
      >
        Grades
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/People`}
        id="wd-course-people-link"
        className="list-group-item text-danger border-0"
      >
        People
      </Link>
    </div>
  );
}
