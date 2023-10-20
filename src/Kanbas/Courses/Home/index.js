import CourseStatus from "./CourseStatus";
import ModuleHeadButton from "../Modules/ModuleHeadButton";
import Modules from "../Modules";
function Home(){
return (   

<>
<div className="wd-modules d-flex flex-column w-100">
    <div className="d-flex flex-column p-5">
        <div className="d-flex flex-row flex-wrap">
            <div className="col-md-8 col-lg-8"> 
                <Modules/>
            </div>
            <div className="col-md-4 col-lg-4">
                <CourseStatus/>
            </div>
        </div>
    </div>
</div>

    
</>
    
   );
}

export default Home;