import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>RandomJoke</Link>
        <Link to={"/myjokes"}>Myjokes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
