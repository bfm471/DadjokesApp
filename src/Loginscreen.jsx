import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function Loginscreen() {
  return (
    <div className="App">
      <nav>
        <Link to={"/login"}>Log In</Link>
        <Link to={"/login/signin"}>Create account</Link>
      </nav>
      <Outlet />
    </div>
  );
}
