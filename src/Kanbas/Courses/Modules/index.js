import ModuleList from "./ModuleList";
import ModuleHeadButton from "./ModuleHeadButton";
import "./index.css";
function Modules() {
  return (
    <div className="container">
  
      <span className="wd-HeadAlignRight"> <ModuleHeadButton /></span>
                          
      <hr />

      <span className="wd-ModuleList"><ModuleList /></span>
      
    </div>
  );
}
export default Modules;