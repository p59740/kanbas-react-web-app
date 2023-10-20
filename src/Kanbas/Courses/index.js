import db from "../Database";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import {FaBars} from "react-icons/fa";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
    const breadcrumb = () => {
        const path = pathname.split("/");
        return decodeURI(path[path.length - 1]);

    };

    const customStyle1 = {
      marginLeft: '0.8em',
      color: 'rgb(212,27,44)', 
      fontWeight: 'bold',
      fontSize:'25px',
    };

    const customStyle2 = {
      padding:'20px',
    };

  

    return (
        <div className="wd-courses w-100">
          <div className="container">
            <div className="d-md-block">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" style={customStyle1}>
                        <li className="breadcrumb-item" > 
                        <FaBars className="wd-icon" /><span style={customStyle2}>{courseId}{course.name} </span></li>
                        <li className="breadcrumb-item active">{breadcrumb()}</li>
                    </ol>
                </nav>
              </div>
          </div>
            <hr />
          
            <div className = "d-flex flex-row">
                <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules/>}/>
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                    <Route path="Grades" element={<Grades />} />
                    
                </Routes>
            </div>
           
            <div>
        
      </div>

        </div>

    );
}
export default Courses;