import Nav from "../Nav";
import KanbasNavigation from "./kanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import Calendar from "./Calendar";

function Kanbas() {
 return (
   <div className="d-flex">
       <KanbasNavigation/>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account/>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<Calendar />} />
        </Routes>

  </div>
 );
}
export default Kanbas;


