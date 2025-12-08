import { useState, useEffect } from "react";
import * as client from "./client";

const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "Learn the basics of programming",
    course: "CS5610",
  });

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };

  const updateTitle = async () => {
    const updatedAssignment = await client.updateTitle(assignment.title);
    setAssignment(updatedAssignment);
  };

  const fetchModule = async () => {
    const mod = await client.fetchModule();
    setModule(mod);
  };

  const updateModuleName = async () => {
    const updatedModule = await client.updateModuleName(module.name);
    setModule(updatedModule);
  };

  useEffect(() => {
    fetchAssignment();
    fetchModule();
  }, []);

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <input
        className="form-control w-75 mb-2"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <button className="btn btn-primary" onClick={updateTitle}>
        Update Title
      </button>
      <hr />

      <h4>Assignment Object</h4>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />

      <h3>Working With Module Object</h3>

      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />

      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />

      <h4>Modifying Module Name</h4>
      <input
        className="form-control w-75 mb-2"
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <button className="btn btn-primary" onClick={updateModuleName}>
        Update Module Name
      </button>
      <hr />

      <h4>Module Object</h4>
      <pre>{JSON.stringify(module, null, 2)}</pre>
      <hr />
    </div>
  );
}
