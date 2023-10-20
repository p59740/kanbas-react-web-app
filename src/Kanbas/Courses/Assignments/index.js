import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV,FaPlus,FaCaretDown,FaCheckCircle } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import "./index.css";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const ellipsisIconStyle = { color: '#787878' ,margin:'2px'};
    return (
        <div className="wd-assignments w-100">
            <div className="row">
                <div className="col-5">
                    <input type="assignment" className="form-control text-area-width"
                        placeholder="Search for Assignments" id="text-fields-assignment" />
                </div>

                <div className="col-7 align-items-end text-end">
                    <button type="button" className="btn btn-light">
                        <FaPlus className="wd-icon" style={ellipsisIconStyle}/>Group </button>
                    <button type="button" className="btn btn-danger">
                        Assignment</button>
                    <button type="button" className="btn btn-light"><FaEllipsisV  className="wd-icon" style={ellipsisIconStyle} />
                    </button>
                </div>
            </div>

            <div className="list-group">
                <li className="list-group-item list-group-item-secondary">
                <span >
                    <FaEllipsisV className="wd-icon"  style={ellipsisIconStyle} />
                    <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                    <FaCaretDown className="wd-icon"  style={ellipsisIconStyle} />
                    <span className='custom-indent'> Assignments for course {courseId}</span>
                 </span>
                    
              
                    <span className="float-end ">
                        <FaPlus className="wd-icon" style={ellipsisIconStyle} />
                        <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                        </span>
                        <span className="float-end border border-black rounded-pill">
                        <p className="p-0 m-0 px-2">40% of Total</p>
                    </span>
                </li>
                
                {courseAssignments.map((assignment) => (

                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item green-left-border">
                        <div className="row">
                            <div className="col-2">
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                              <FaFilePen className="wd-icon"  style={{color:'Green'}} /></div>
                            <div className="col-7">
                               <span className="h6" style={{fontWeight:'bold',color:"#787878"}}>{assignment._id}  {assignment.title}</span>
                                <p className="assignment-subtext"> Mutiple modules |</p>
                                <p className="assignment-subtext">Due: {assignment.due} | {assignment.points} pts</p>
                            </div>
                            <div className="col-1">
                            <FaCheckCircle className="wd-icon" style={{color:"Green"}} />
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                            </div>
                            
                        </div>
                        
                    </Link>

                ))}
            </div>
        </div>
    );
}
export default Assignments;