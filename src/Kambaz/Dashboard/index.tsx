import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

      {isFaculty && (
        <>
          <h5>New Course</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <button className="btn btn-success me-2" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {enrolling ? "All Courses" : "My Courses"} ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((c) => (
            <div
              key={c._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    alt="course"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            updateEnrollment(c._id, !c.enrolled);
                          }}
                          className={`btn ${
                            c.enrolled ? "btn-danger" : "btn-success"
                          } float-end btn-sm`}
                        >
                          {c.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {c.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {c.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
                {isFaculty && (
                  <div className="card-body">
                    <button
                      className="btn btn-warning me-2 btn-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        setCourse(c);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteCourse(c._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
