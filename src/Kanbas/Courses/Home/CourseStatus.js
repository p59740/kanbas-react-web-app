import React from "react";
import "./CourseStatus.css"
import{FaCheckCircle} from "react-icons/fa";
import{FaFileImport,FaChartSimple,FaVolumeLow,FaBan} from "react-icons/fa6";
import{TbFileImport} from "react-icons/tb";
import{BiTargetLock,BiCalendarCheck} from "react-icons/bi";
import{BsFillBarChartLineFill,BsBell} from "react-icons/bs";

const buttonsData = [
    { label: 'Unpublished', icon: <FaBan className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Published', icon: <FaCheckCircle className="wd-icon" style={{ color: 'black' }}/>},
    { label: 'Import Existing Content', icon: <FaFileImport className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Import from Commons', icon: <TbFileImport className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'Choose Home Page', icon: <BiTargetLock className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'View Course Stream',icon: <BsFillBarChartLineFill className="wd-icon" style={{ color: 'black' }}/>},
    { label: 'New Announcement', icon: <FaVolumeLow className="wd-icon" style={{ color: 'black' }}/> },
    { label: 'New Analytics', icon: <FaChartSimple className="wd-icon" style={{ color: 'black' }}/>},
    { label: 'View Course Notifications', icon: <BsBell className="wd-icon" style={{ color: 'black' }}/> },
    {label:'Calendar', icon: <BiCalendarCheck className="wd-icon" style={{ color: 'gray' }}/> },

];
    
  

function CourseStatus(){
    return (
        // <div className="wd-main-navigation d-none d-lg-block">
        //   <h4>Course Status</h4>
        //   <div className="">
        //     <span>
        //       {buttonsData.slice(0, 2).map((button, index) => (
        //         <button key={index} type="button" className={`btn ${button.color}`}>
        //           {button.icon}
        //           {button.label}
        //         </button>
        //       ))}
        //     </span>
        //   </div>
        //   <br />
        //   <div className="main_btn">
        //     {buttonsData.slice(2).map((button, index) => (
        //       <button key={index} className="wb-button-textleft">
        //         {button.icon}
        //         {button.label}
        //       </button>
        //     ))}
        //   </div>
        // </div>
        
            <div className="wd-main-navigation d-none d-lg-block">
              <h4>Course Status</h4>
              <div>
                <span>
                  <button type="button" className="" style={{color:"black"}}>
                  <FaBan className="wd-icon" style={{ color: 'black' }}/>
                    Unpublished
                  </button>
                  <button type="button" className="btn btn-success">
                  <FaCheckCircle className="wd-icon" style={{ color: 'white' }}/>
                    Published
                  </button>
                </span>
              </div>
              <br />
              <div className="main_btn">
                <button className="wb-button-textleft limitWidth">
                <FaFileImport className="wd-icon" style={{ color: 'black' }}/> 
                  Import Existing Content
                </button>
                <button className="wb-button-textleft limitWidth">
                <TbFileImport className="wd-icon" style={{ color: 'black' }}/>
                  Import from Commons
                </button>
                <button className="wb-button-textleft limitWidth">
                <BiTargetLock className="wd-icon" style={{ color: 'black' }}/> 
                  Choose Home Page
                </button>
                <button className="wb-button-textleft">
                <BsFillBarChartLineFill className="wd-icon" style={{ color: 'black' }}/>
                  View Course Stream
                </button>
                <button className="wb-button-textleft">
                    <FaVolumeLow className="wd-icon" style={{ color: 'black' }}/>
                  New Announcement
                </button>
                <button className="wb-button-textleft">
                <FaChartSimple className="wd-icon" style={{ color: 'black' }}/>
                  New Analytics
                </button>
                <button className="wb-button-textleft">
                <BsBell className="wd-icon" style={{ color: 'black' }}/>
                  View Course Notifications
                </button>
              </div>
              <br />
              <h5>To Do</h5>
              <span className="wd-block1-font" style={{ marginBottom: '1em' ,color:"rgb(212,27,44)"}}>
                Grade A1 - ENV + HTML
              </span>
              <br />
              <span>100 points • Sep 18 at 11:59pm</span>
              <hr />
              <h5>Coming Up</h5>
              <a href="#">View Calendar</a>
        
              <div className="row">
                <div className="col-sm-1">
                  <a>
                  <BiCalendarCheck className="wd-icon" style={{ color: 'gray' }}/> 
                  </a>
                </div>
        
                <div className="col">
                  <a href="#">
                    <span className="wd-block1-font">Lecture</span>
                  </a>
                  <br />
                  <span>CS4550.12631.202410 Sep 11 at 11:45am</span>
                </div>
              </div>
        
              <div className="row">
                <div className="col-sm-1">
                  <a>
                  <BiCalendarCheck className="wd-icon" style={{ color: 'gray' }}/> 
                  </a>
                </div>
        
                <div className="col">
                  <a href="#">
                    <span className="wd-block1-font">CS5610 06 SP23 Lecture</span>
                  </a>
                  <br />
                  <span>CCS4550.12631.202410 Sep 11 at 6pm</span>
                </div>
              </div>
        
              <div className="row">
                <div className="col-sm-1">
                  <a>
                  <BiCalendarCheck className="wd-icon" style={{ color: 'gray' }}/> 
                  </a>
                </div>
        
                <div className="col">
                  <a href="#">
                    <span className="wd-block1-font">Lecture</span>
                  </a>
                  <br />
                  <span>CS4550.12631.202410 Sep 11 at 7pm</span>
                </div>
              </div>
            </div>
          );
        }

export default CourseStatus;