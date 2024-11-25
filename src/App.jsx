import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import ClassesTable from './ClassesTable';
import StudentsTable from './StudentsTable';
import RulesTable from './RulesTable';
import EventsTable from './EventsTable';
import Setting from './Setting';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  let ContentComponent;
  switch (currentView) {
    case "classes":
      ContentComponent = <ClassesTable />;
      break;
    case "students":
      ContentComponent = <StudentsTable />;
      break;
    case "rules":
      ContentComponent = <RulesTable />;
      break;
    case "events":
      ContentComponent = <EventsTable />;
      break;
      case "setting": // Add this case
    ContentComponent = <Setting />;
    break;
    default:
      ContentComponent = <Home />;
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} setCurrentView={setCurrentView} />
      {ContentComponent}
    </div>
  );
}

export default App;
