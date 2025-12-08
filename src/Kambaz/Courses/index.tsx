import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function Courses() {
  const { cid } = useParams();
  const [course, setCourse] = useState<any>(null);

  const fetchCourse = async () => {
    const course = await client.fetchAllCourses();
    const foundCourse = course.find((c: any) => c._id === cid);
    setCourse(foundCourse);
  };

  useEffect(() => {
    fetchCourse();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name || "Course"}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
