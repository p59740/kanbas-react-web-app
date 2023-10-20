import { FaUserCircle,FaBook, FaInbox, FaCalendarAlt,FaRegClock,FaLaptop, FaSignOutAlt,FaRegQuestionCircle, FaLaptopCode } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { RiDashboard3Fill } from "react-icons/ri";
import NEU from "../Images/Snipaste_2023-10-01_23-19-59.png";
import "./index.css";

function KanbasNavigation() {

  const linksMap = [
    { label: 'NEU', isLogo: true, logoSrc: NEU },
    { label: 'Account', icon: <FaUserCircle className="wd-icon" style={{ color: 'lightgray' }} /> },    
    { label: 'Dashboard',icon: <RiDashboard3Fill className="wd-icon" /> },
    { label: 'Courses',icon: <FaBook className="wd-icon" /> },
    { label: 'Calendar', icon: <FaCalendarAlt className="wd-icon" /> },
    { label: 'Inbox', icon: <FaInbox className="wd-icon" /> },
    { label: 'History', icon: <FaRegClock className="wd-icon" /> },
    { label: 'Studio', icon: <FaLaptopCode className="wd-icon" /> },
    { label: 'Commons' , icon: <FaSignOutAlt className="wd-icon" /> },
    { label: 'Help', icon: <FaRegQuestionCircle className="wd-icon" /> }
  ];

 
  const { pathname } = useLocation();

  return (
    <div className="list-group wd-kanbas-navigation">
      {linksMap.map((item, index) => (
        item.isLogo ? (
          <img key={index} src={item.logoSrc}  width="80px" alt={item.label} />
        ) : (
          <Link
            key={index}
            to={`/Kanbas/${item.label}`}
            className={`list-group-item ${pathname.includes(item.label) && "active"}`}
          >
            
            {item.icon}
            <br/>
            {item.label}
          </Link>
          )
      ))}

    </div>
  );
}

export default KanbasNavigation;