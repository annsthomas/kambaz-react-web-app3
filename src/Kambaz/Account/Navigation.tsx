import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group">
      <Link to="/Kambaz/Account/Signin" className="list-group-item list-group-item-action">
        Signin
      </Link>
      <Link to="/Kambaz/Account/Signup" className="list-group-item list-group-item-action">
        Signup
      </Link>
      <Link to="/Kambaz/Account/Profile" className="list-group-item list-group-item-action">
        Profile
      </Link>
    </div>
  );
}
