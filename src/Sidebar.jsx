import React from 'react';
import { BsFillPersonFill, BsBarChartFill, BsPeopleFill, BsCalendarFill, BsList, BsFillClipboardDataFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, setCurrentView }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillPersonFill className="icon_header" /> University
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={() => setCurrentView("dashboard")}>
          <a href="#">
            <BsBarChartFill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setCurrentView("students")}>
          <a href="#">
            <BsPeopleFill className="icon" /> Students
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setCurrentView("classes")}>
          <a href="#">
            <BsCalendarFill className="icon" /> Classes Timing
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setCurrentView("rules")}>
          <a href="#">
            <BsList className="icon" /> University Rules
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setCurrentView("events")}>
          <a href="#">
            <BsFillClipboardDataFill className="icon" /> Events
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setCurrentView("setting")}>
          <a href="#">
            <BsFillClipboardDataFill className="icon" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;