import Nav from "../Nav";
import KanbasNavigation from "./kanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "../Project/users/account";
import Calendar from "./Calendar";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../Project/users/signin";
import UserTable from "../Project/users/table";

function Kanbas() {
  const [errorMessage, setErrorMessage] = useState('');
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const [courses, setCourses] = useState([]);
  // a5 4.2.1 Retrieving Courses
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = "http://localhost:4000/api/courses";
  // const URL = `${API_BASE}/courses`;
  const URL = "https://kanbas-node-server-app-uu6q.onrender.com/api/courses"

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  // a5 !
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() , cid:courses.length+1}]);
  // };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

    const deleteCourse = async (courseId) => {
      const response = await axios.delete(
        `${URL}/${course._id}`
      );
      setCourses(courses.filter(
        (c) => c._id !== courseId));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

// This would interupt status
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

// This wouldn't interupt status
//   const updateCourse = async () => {
//     try {
//         const response = await axios.put(
//             `${URL}/${course._id}`, course);
//         setCourses(courses.map((c) => (
//             c._id === course._id ? course : c)));
//         setCourse({});
//     } catch (error) {
//         console.log(error);
//         setErrorMessage(error.response.data.message);
//     }

// };


  
 return (
  <Provider store={store}>

    <div className="d-flex">
        <KanbasNavigation/>
        <Routes>
            {/* <Route path="/" element={<Navigate to="Dashboard" />} /> */}
            <Route path="/" element={<Signin/>} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account" element={<Account/>} />
            <Route path="Dashboard" element={<Dashboard
                courses={courses}
                  course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
              } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<Calendar />} />
          </Routes>

    </div>
  </Provider>
 );
}
export default Kanbas;


