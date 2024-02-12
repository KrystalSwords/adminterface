import "./styles.css";
import { Link } from "react-router-dom";

//COMPONENT that displays a sidebar for switching between functions
export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
        <li>
          <Link to="/todolist">To Do List</Link>
        </li>
      </ul>
    </div>
  );
}
