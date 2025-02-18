import ModulesControls from "./Modules/ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./Modules/LessonControlButtons";
import ModuleControlButtons from "./Modules/ModuleControlButtons";
export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls />
      <br /><br /><br />
      <ul className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              Learn what is Web Development
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              Creating interactive pages with HTML
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              Introduction to CSS and Styling
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <BsGripVertical className="me-2 fs-3" />
            Week 3
            <ModuleControlButtons />
          </div>
        </li>
      </ul>
    </div>
  );
}
