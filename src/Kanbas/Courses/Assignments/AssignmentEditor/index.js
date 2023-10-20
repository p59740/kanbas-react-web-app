import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaEllipsisV,FaPlus,FaCaretDown,FaCheckCircle } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
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
        <input value={assignment.title}
             className="form-control mb-2" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
          This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
        </textarea>
      </div>
      <br />
      <div className="container">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Points</label>
          <div className="col-sm-6">
            <input
              type="text"
              readOnly
              className="form-control"
              id="staticEmail"
              value="100"
              style={{ backgroundColor: 'white' }}
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
                className="form-control-c"
                type="datetime"
                id="dattimeinput"
                style={{ margin: '10px', width: '80%' }}
                placeholder="Sep 18, 2023, 11:59 PM"
              />
              <br />
              
              <label style={{ width: '50%', marginLeft: '10px', marginBottom: '5px' }}>
                <b>Available From</b>
              </label>
              <label style={{ marginBottom: '5px' }}>
                <b>Until</b>
              </label>
              <br />
              <input
                className="form-control-c"
                type="datetime-local"
                id="dattimeinput"
                style={{ margin: '10px', width: '45%' ,border: '1px solid lightgray'}}
                placeholder="Sep 16, 2023, 11:59 PM"
              />
              <input
                className="form-control-c"
                type="datetime-local"
                id="dattimeinput"
                style={{ margin: '10px' ,width: '45%' ,border: '1px solid lightgray'}}
                placeholder="Sep 18, 2023, 11:59 PM"
              />
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
            <button onClick={handleSave} className="btn btn-danger me-2">
                Save
            </button>
        </span>
      </div>
    </div>

    </div>

    
  );
}


export default AssignmentEditor;