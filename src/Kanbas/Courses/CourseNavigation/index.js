import React from 'react';
import './index.css';
import {Link, useLocation,useParams } from 'react-router-dom';
import {FaRegEyeSlash} from "react-icons/fa";


const CourseNavigation = () => {
  const { courseId} = useParams();
  const { pathname } = useLocation();
  const navigationItems = [
    { label: 'Home', icon: null },
    { label: 'Modules', icon: null },
    { label: 'Piazza', icon: null },
    { label: 'Zoom Meeting', icon: null },
    { label: 'Assignments', icon: null },
    { label: 'Quizzes', icon: null },
    { label: 'Grades', icon: null},
    { label: 'People', icon: null },
    { label: 'Panopto Video', icon: null },
    { label: 'Discussion', icon: null },
    { label: 'Announcements', icon: <FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/>  },
    { label: 'Pages', icon: <FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/>},
    { label: 'Files', icon:<FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Rubrics', icon: <FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Outcome', icon: <FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Collaboration', icon:<FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Syllabus', icon: <FaRegEyeSlash className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Settings', icon: null },
  ];

  return (
    <div className="d-none d-sm-block">
      <span className="wd-course-eclipses">202440_2 Fall...</span>
      <ul className="wd-course-navigation">
        {navigationItems.map((item, index) => (
          <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${item.label}`}
          className={`list-group-item ${pathname.includes(encodeURI(item.label)) && "active"}`} /* Important, to link and class active */
          >
          <div className="two-column-container">
              <div className="label-column">{item.label}</div>
              <div className="icon-column" >{item.icon}</div>
          </div>
          
          </Link>
        ))}
      </ul>

    </div>
  );
};

export default CourseNavigation;
