import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module: any) => module.course === cid);

  return (
    <ul id="wd-modules" className="list-group rounded-0">
      {modules.map((module: any) => (
        <li key={module.id} className="wd-module list-group-item border-gray p-3">
          <div className="wd-title bg-secondary text-white p-2 rounded">
            <BsGripVertical className="me-2 fs-3" />
            {module.name}
            <ModuleControlButtons />
          </div>
          {module.lessons && (
            <ul className="wd-lessons list-group mt-2">
              {module.lessons.map((lesson: any) => (
                <li key={lesson.id} className="wd-lesson list-group-item p-2">
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
  );
}
