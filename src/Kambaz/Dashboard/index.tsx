import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../Courses/client";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    department: "D123",
    credits: 4,
  });

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  const addCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
    // Reset the form
    setCourse({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
      department: "D123",
      credits: 4,
    });
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    setCourse({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
      department: "D123",
      credits: 4,
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2>New Course</h2>
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <button className="btn btn-success me-2" onClick={addCourse}>
        Add Course
      </button>
      <button className="btn btn-primary me-2" onClick={updateCourse}>
        Update Course
      </button>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
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
                      {c.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {c.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
