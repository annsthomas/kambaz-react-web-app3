import { useParams, Link } from "react-router-dom";
import * as db from "../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  if (!assignment) return <h2>Assignment Not Found</h2>;

  return (
    <div id="wd-assignments-editor" className="p-3">
      <h2>{assignment.title}</h2>
      <p><strong>Course:</strong> {cid}</p>
      
      <div className="mt-3">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
