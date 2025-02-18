import { useParams, Link } from "react-router-dom";
import * as db from "../Database";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text"><FaSearch /></span>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button className="btn btn-danger me-2"><FaPlus /> Group</button>
          <button className="btn btn-danger"><FaPlus /> Assignment</button>
        </div>
      </div>

      <h3 className="d-flex align-items-center justify-content-between border-bottom pb-2">
        ASSIGNMENTS <small className="text-muted">40% of Total</small>
        <button className="btn btn-outline-secondary"><FaPlus /></button>
      </h3>

      <ul className="list-group mt-3">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item">
            <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="fw-bold text-decoration-none">
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
