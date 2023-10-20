import "./ModuleHeadButton.css";
import {FaRegCheckCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEllipsisV,faCaretDown } from '@fortawesome/free-solid-svg-icons';
function ModuleHeadButton(){
    const ellipsisIconStyle = { color: '#787878' };
    return( 
    <>
      <div >
                <button className="btn btn-light  wd-customBtnStyle" >Collapse All</button>
                <button className="btn btn-light  wd-customBtnStyle" >View Progress</button>
                <button className="btn btn-light  wd-customBtnStyle">
                <FaRegCheckCircle className="wd-icon" style={{color:'Green'}} /> Publish All
                <FontAwesomeIcon className="wd-icon" icon={faCaretDown}  />
                </button>

                <button className="btn btn-danger">
                <FontAwesomeIcon className="wd-icon" icon={faPlus} style={{color:'white'}} /> Module
                </button>
                <button className="btn btn-light wd-customBtnStyle" >
                <FontAwesomeIcon className="wd-icon " icon={faEllipsisV} style={ellipsisIconStyle} />
                </button>

            </div>
</>
);
}

export default ModuleHeadButton;