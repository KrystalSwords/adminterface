import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./styles.css";

//COMPONENT that contains the header and sidebar layout
export default function Layout() {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div className="side">
        <Sidebar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
