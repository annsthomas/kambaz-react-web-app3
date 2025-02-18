import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <div className="card">
        <h2>Profile</h2>
        <input defaultValue="alice" placeholder="Username" className="form-control" id="wd-username" />
        <input defaultValue="123" placeholder="Password" type="password" className="form-control" id="wd-password" />
        <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="form-control" />
        <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="form-control" />
        <input defaultValue="2000-01-01" type="date" id="wd-dob" className="form-control" />
        <input defaultValue="alice@wonderland.com" placeholder="Email" id="wd-email" className="form-control" />
        <select defaultValue="FACULTY" id="wd-role" className="form-control">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <Link to="/Kambaz/Account/Signin" className="btn btn-danger">
          Sign out
        </Link>
      </div>
    </div>
  );
}
