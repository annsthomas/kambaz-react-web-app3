import { Link } from "react-router-dom";
import "./account.css";
export default function Signin() {
  return (
    <div id="wd-account-container">
      <div id="wd-signin-screen">
        <h1>Signin</h1>
        <input id="wd-username" placeholder="username" className="form-control mb-2" />
        <input id="wd-password" placeholder="password" type="password" className="form-control mb-2" />
        <button id="wd-signin-btn" className="btn btn-primary w-100">Signin</button>
        <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Signup</Link>
      </div>
    </div>
  );
}
