import React,{useEffect, useState} from "react";
import {  setAssignment, deleteAssignment ,setAssignments } from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams , useNavigate} from "react-router-dom";
import { FaEllipsisV,FaPlus,FaCaretDown,FaCheckCircle } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import "./index.css";
import { Modal, Button } from "react-bootstrap";
import {BsTrash3Fill} from 'react-icons/bs';
import * as client from "./client"; 

function Assignments() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findAssignmentsForCourses(courseId)
          .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
      }, [courseId]);
    const dispatch = useDispatch();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const ellipsisIconStyle = { color: '#787878' ,margin:'2px'};
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);
    
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/assignment-editor`);
        dispatch(setAssignment({
        title: "New Assignment",
        description: "New Description",
        points: 100,
        due: "",
        availableFrom: "",
        until: "",
        course: courseId
        }));
    };


    
    const openDeleteDialog = (assignment) => {
        setAssignmentToDelete(assignment);
        setDeleteDialogOpen(true);
      };
    
      const closeDeleteDialog = () => {
        setAssignmentToDelete(null);
        setDeleteDialogOpen(false);
      };
    
    //   const confirmDelete = () => {
    //     if (assignmentToDelete) {
    //       dispatch(deleteAssignment(assignmentToDelete._id));
    //       setAssignmentToDelete(null);
    //       setDeleteDialogOpen(false);
    //     }
    //   };

      const handleDeleteClick = () => {
        if(assignmentToDelete){
            client.deleteAssignment(assignmentToDelete._id).then((status) => {
                dispatch(deleteAssignment(assignmentToDelete._id)) ;
                setAssignmentToDelete(null);
                setDeleteDialogOpen(false);
            })
        }
      };

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
                    <button type="button" className="btn btn-danger" onClick={handleAddAssignment}>
                        <FaPlus className="wd-icon" style={{color:"white"}}/>
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

                    <div className=" list-group-item  green-left-border">
                        <div className="row wd-assignments ">
                            <div className="col-2">
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                            <FaFilePen className="wd-icon"  style={{color:'Green'}} /></div>
                            
                            <div className="col-6 ">
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item none-border">
                               <span className="h6" style={{fontWeight:'bold',color:"#787878"}}>{assignment._id}  {assignment.title}</span>
                                <p className="assignment-subtext"> Mutiple modules | {assignment.course} |</p>
                                <p className="assignment-subtext">Due: {assignment.due} | {assignment.points} pts</p>
                                </Link>
                            </div>
                           

                            <div className="col-2" style={{ textAlign: 'right' }} >
                            <FaCheckCircle className="wd-icon" style={{color:"Green"}} />
                            <FaEllipsisV className="wd-icon" style={ellipsisIconStyle} />
                            <button className="btn btn-danger btn-sm btn-block"   onClick={() => openDeleteDialog(assignment)}> <BsTrash3Fill /></button>
                           
                            </div>
                            
                        </div>
                        {deleteDialogOpen && (
                        <Modal show={deleteDialogOpen} onHide={closeDeleteDialog}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to remove the assignment "{assignmentToDelete?.title}"?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeDeleteDialog}>
                            No
                            </Button>
                            <Button variant="danger" onClick={handleDeleteClick}>
                            Yes
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    )}
                
                    </div>

                   
                    
                    
                       

                ))}
                     
            </div>
        </div>
    );
}
export default Assignments;