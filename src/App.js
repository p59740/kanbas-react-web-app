import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project";

function App() {
  return (
    <HashRouter>
        <div >
        <Routes>
        <Route path="/"         element={<Navigate to="./Labs"/>}/>
        <Route path="/Hello"    element={<HelloWorld/>}/>
        <Route path="/project/*" element={<Project />} />
        <Route path="/Labs/*"   element={<Labs/>}/>
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
        </div>
    </HashRouter>
  );
}

export default App;