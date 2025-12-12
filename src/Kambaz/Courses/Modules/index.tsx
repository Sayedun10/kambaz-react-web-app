import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../../Modules/client";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>([]);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: cid,
  });

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    setModules(modules);
  };

  const addModule = async () => {
    const newModule = await client.createModule(cid as string, module);
    setModules([...modules, newModule]);
    setModule({
      name: "New Module",
      description: "New Description",
      course: cid,
    });
  };

  const deleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  const updateModule = async () => {
    await client.updateModule(module);
    setModules(
      modules.map((m) => (m._id === (module as any)._id ? module : m))
    );
    setModule({
      name: "New Module",
      description: "New Description",
      course: cid,
    });
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div>
      <ModulesControls />

      {/* Add Module Form */}
      <div className="mb-3">
        <h4>Add/Edit Module</h4>
        <input
          className="form-control mb-2"
          value={module.name}
          placeholder="Module Name"
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          value={module.description}
          placeholder="Module Description"
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
        />
        <button className="btn btn-success me-2" onClick={addModule}>
          Add Module
        </button>
        <button className="btn btn-primary" onClick={updateModule}>
          Update Module
        </button>
      </div>

      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((m: any) => (
          <li
            key={m._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {m.name}
              </div>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setModule(m)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteModule(m._id)}
                >
                  Delete
                </button>
                <ModuleControlButtons />
              </div>
            </div>
            {m.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {m.lessons.map((lesson: any) => (
                  <li
                    key={lesson._id}
                    className="wd-lesson list-group-item p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
