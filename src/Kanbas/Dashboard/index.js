import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {LuPenSquare} from 'react-icons/lu';
import {BsTrash3Fill} from 'react-icons/bs';
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
    // const courses = db.courses;
    console.log("1111")
    console.log(courses)
    const colorArray = [  '#91349B' , 'rgb(212, 27, 44)','#1a7f93', '#3C4F36'];
    const color = colorArray[(Number(courses[0].id)) % colorArray.length];// courses is an array
    
    
    
    return (
        <div>
            <div class= "wd-box-body">
            <h1>Dashboard</h1>
            <hr />
            
            <h2><span class="wd-box-body" >Course</span> </h2>
            <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

            <button className="btn btn-danger btn-lg btn-block" onClick={addNewCourse} >
            Add
            </button>
            <button  className="btn btn-success btn-lg btn-block" onClick={updateCourse} >
            Update
            </button>

            <hr />

            <h2><span class="wd-box-body" >Published Courses ({courses.length})  </span> </h2>
            <hr/>
            </div>
            <div className="row">
                {courses.map((course) => (  // input courses.getKey() = course , it's an object
                    <div className="col" key={course._id}>
                        <div className="card">
                            <div className="image-container">
                            
                            <div id="coloredBox" style={{backgroundColor: colorArray[(Number(course.cid)) % colorArray.length] }}></div>

                            </div>
                            
                            <div className="card-body">
                            <Link to={`/Kanbas/Courses/${course._id}`} className="no-underline">
                                    <div className="card-title" style={{textDecoration : 'none'}}>
                                         <h5 style={{color:colorArray[(Number(course.cid)) % colorArray.length] }}>{course._id + " " + course.number + " " + course.name}</h5>
                                    </div>
                                   
                                   <div className="card-section-line">
                                   <p className="card-text">
                                        {course._id + "." + course.number}
                                        <br />
                                        <span className="card-attach">202440_2 Fall 2023 Semester Full Term...</span>
                                    </p>
                                   </div>

                                   

                                   <button className="btn btn-outline-secondary btn-sm btn-block" 
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        <LuPenSquare style={{color:"black"}}/>
                                    </button>

                                   <button className="btn btn-outline-secondary btn-sm btn-block"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        <BsTrash3Fill style={{color:"black"}}/>
                                    </button>

                                </Link>
                                

                            </div>
                        </div>
                    </div>
                ))}
            </div>


           
        </div>
    );
}
export default Dashboard;