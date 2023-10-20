import { Link } from "react-router-dom";
import database from "../Database";
import "./index.css";
import {LuPenSquare} from 'react-icons/lu';
function Dashboard() {
    const courses = database.courses;
    const colorArray = [  '#91349B' , 'rgb(212, 27, 44)','#1a7f93', '#3C4F36'];
    const color = colorArray[(Number(courses[0].id)) % colorArray.length];// courses is an array
    return (
        <div>
            <div class= "wd-box-body">
            <h1>Dashboard</h1>
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
                                </Link>
                                <LuPenSquare/>

                            </div>
                        </div>
                    </div>
                ))}
            </div>


           
        </div>
    );
}
export default Dashboard;