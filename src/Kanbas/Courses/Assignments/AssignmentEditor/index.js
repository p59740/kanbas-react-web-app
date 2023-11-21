import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { FaEllipsisV,FaPlus,FaCaretDown,FaCheckCircle } from "react-icons/fa";
import {
  updateAssignment,
  addAssignment, 
} from "../assignmentsReducer";
import * as client from "../client"; 


function AssignmentEditor() {
    const { courseId ,assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    // console.log(assignment.title)
    // console.log("aaa "+ assignment)
    const navigate = useNavigate();

    const dispatch = useDispatch();

   
    const [editedTitle, setEditedTitle] = useState("New Assignment");
    const [editedDescription, setEditedDescription] = useState("New Assignment Description");
    const [editedPoints, setEditedPoints] = useState(100);
    const [editedAssignDate, setEditedAssignDate] = useState("");
    const [editedDueDate, setEditedDueDate] = useState("");
    const [editedAvailableFrom, setEditedAvailableFrom] = useState("");
    const [editedUntil, setEditedUntil] = useState("");
  
    useEffect(() => {
      if (assignment) {
        setEditedTitle(assignment.title);
        setEditedDescription(assignment.description);
        setEditedPoints(assignment.points);
        setEditedAssignDate(assignment.assignDate);
        setEditedDueDate(assignment.due);
        setEditedAvailableFrom(assignment.availableFrom);
        setEditedUntil(assignment.until);
      }
    }, [assignment]);
    
 

    // const handleSave = () => {
    //   const updatedAssignment = {
    //     _id: assignmentId,
    //     title: editedTitle,
    //     description: editedDescription,
    //     points: editedPoints,
    //     assignDate: editedAssignDate,
    //     due: editedDueDate,
    //     availableFrom: editedAvailableFrom,
    //     until: editedUntil,
    //     course: courseId,
    //   };

    //   if (assignment) {
    //     dispatch(updateAssignment(updatedAssignment));
    //   } else {
    //     dispatch(addAssignment(updatedAssignment));
    //   }

    //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    // };


    const handleSaveNew = async () => {
      const updatedAssignment = {
        _id: assignmentId,
        title: editedTitle,
        description: editedDescription,
        points: editedPoints,
        assignDate: editedAssignDate,
        due: editedDueDate,
        availableFrom: editedAvailableFrom,
        until: editedUntil,
        course: courseId,
      };

      if (assignment) {
        client.toUpdateAssignment(assignmentId, updatedAssignment);
          dispatch(updateAssignment(updatedAssignment));
      } else {
        client.createAssignment(courseId, updatedAssignment).then((updatedAssignment) => {
          dispatch(addAssignment(updatedAssignment));
        });
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    // const handleUpdateAssignment = async (assignmentId) => {
    //   const status = await toUpdateAssignment(assignmentId, assignment);
    //   dispatch(updateAssignment(assignment));
    // };

  return (
    <div className="w-100">
      <div className="wd-flex-grow-1">
      <div className="wd-new-container">
        <div className="row">
            <div className="col-sm-12"></div>
            <div className="col-sm-2">
            <button
            style={{ backgroundColor: 'white', color: 'black', minWidth: '150px', border: '0px' }}
            >
            <FaCheckCircle className="wd-icon" style={{color:'Green'} }/>
            Published
            </button>
            <button className="btn">
            <button type="button" className="btn btn-light"><FaEllipsisV  className="wd-icon" style={{color:'gray'} }/>
                    </button>
            </button>
            </div>
        </div>
       
      </div>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Assignment Name</label>
        <input value={editedTitle}
             className="form-control mb-2" onChange={(e) => setEditedTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <textarea
        value={editedDescription } 
        className="form-control mb-2"
        onChange={(e) => setEditedDescription(e.target.value)}
        />

      </div>
      <br />
      <div className="container">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Points</label>
          <div className="col-sm-6">
            <input
              type="number"
              value={editedPoints}
              className="form-control"
              onChange={(e) => setEditedPoints(parseInt(e.target.value, 10))}
      />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Assignment Group</label>
          <div className="col-sm-6">
            <select className="form-select form-control" aria-label="Default select example">
              <option selected>ASSIGNMENTS</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Display Grade as</label>
          <div className="col-sm-6">
            <select className="form-select form-control" aria-label="Default select example">
              <option selected>Percentage</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label"></label>
          <div className="col-sm-6">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Submission Type</label>
          <div className="col-sm-8" style={{ border: '1px' }}>
            <div style={{ border: '1px solid lightgray' }}>
              <select className="form-select form-control" aria-label="Default select example" style={{ width: '50%', margin: '10px' }}>
                <option selected>Online</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label style={{ margin: '10px' }}>
                <b>Online Entry Options</b>
              </label>
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
                style={{ margin: '10px' }}
                checked
              />
              <label className="form-check-label" htmlFor="flexCheckDefault1" style={{ margin: '5px' }}>
                Text Entry
              </label>
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
                style={{ margin: '10px' }}
                checked
              />
              <label className="form-check-label" htmlFor="flexCheckDefault2" style={{ margin: '5px' }}>
                Website URL
              </label>
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
                checked
                style={{ margin: '10px' }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault3" style={{ margin: '5px' }}>
                Media Recordings
              </label>
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault4"
                style={{ margin: '10px' }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault4" style={{ margin: '5px' }}>
                Student Annotation
              </label>
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault5"
                style={{ margin: '10px' }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault5" style={{ margin: '5px' }}>
                File Uploads
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Submission Type</label>
          <div className="col-sm-8" style={{ border: '1px' }}>
            <div style={{ border: '1px solid lightgray' }}>
              <label style={{ margin: '10px', marginBottom: '5px' }}>
                <b>Assign To</b>
              </label>
              <div style={{  width: '50%', margin: '10px' }}>
                <button style={{ margin: '5px' }}>
                  Everyone
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
              <label style={{ margin: '10px', marginBottom: '5px' }}>
                <b>Due</b>
              </label>
              <br />
            
              <input
                type="date"
                value={editedDueDate}
                className="form-control mb-2"
                onChange={(e) => setEditedDueDate(e.target.value)}
                style={{ margin: '10px', width: '80%' }}
              />    

              <br />
              <div class="row">
                <div class="col-md-5"> 
                  <label style={{ marginLeft: '10px' }}>
                    <b>Available From</b>
                  </label>
                  <input
                    type="date"
                    value={editedAvailableFrom}
                    className="form-control mb-2"
                    onChange={(e) => setEditedAvailableFrom(e.target.value)}
                    style={{ margin: '10px' }}
                  />
                </div>
                        
                <div class="col-md-5">
                  <label style={{ marginLeft: '5px' }}>
                    <b>Until</b>
                  </label>
                  <input
                    type="date"
                    value={editedUntil}
                    className="form-control mb-2"
                    onChange={(e) => setEditedUntil(e.target.value)}
                    style={{ margin: '10px' }}
                />
                </div>
              </div>        
            </div>
            <button style={{ width: '100%'  }}>
              <FaPlus />
              Add
            </button>
          </div>
        </div>
        <hr />
        <input type="checkbox" id="newcheck" />
        <label htmlFor="newcheck"> Notify users that this content has changed</label>
        <span className="float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn" style={{backgroundColor:'gray'}}>
                Cancel
                </Link>
            <button onClick={handleSaveNew}
            
             className="btn btn-danger me-2">
                Save
            </button>
           
        </span>
      </div>
    </div>

    </div>

    
  );
}


export default AssignmentEditor;