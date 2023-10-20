import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSubtract,faCheckCircle, faEllipsisV,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './ModuleList.css';
import db from '../../Database';

function Modules() {
    const { courseId } = useParams();
    const modules = db.modules;
    const [expandedModules, setExpandedModules] = useState({});

    const toggleModule = (index) => {
        setExpandedModules(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const checkIconStyle = { color: '#00a600' };
    const ellipsisIconStyle = { color: '#787878' };

    return (
        <div>
            <ul className="list-group module-list w-100">
                {
                    modules
                        .filter(module => module.course === courseId)
                        .map((module, index) => (
                            <React.Fragment key={module._id}>
                        <li 
                            className="list-group-item list-group-item-light custom-grey-bg"
                            onClick={() => toggleModule(index)} 
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ flexGrow: 1 }}>
                                    <FontAwesomeIcon className="wd-icon" icon={faEllipsisV} style={ellipsisIconStyle} />
                                    <FontAwesomeIcon className="wd-icon"icon={faEllipsisV} style={ellipsisIconStyle} />
                                    <FontAwesomeIcon className="wd-icon" icon={faCaretDown} style={ellipsisIconStyle} />
                                    <span className='custom-indent'>{module.name}</span>
                                    </div>
                                <div>
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faCheckCircle} style={checkIconStyle} />
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faCaretDown} style={ellipsisIconStyle} />
                                    {expandedModules[index] ?  <FontAwesomeIcon className="wd-icon-moreInter" icon={faSubtract} style={ellipsisIconStyle} /> : 
                                        <FontAwesomeIcon className="wd-icon-moreInter" icon={faPlus} style={ellipsisIconStyle} />}
                                    
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faEllipsisV} style={ellipsisIconStyle} />
                                </div>
                            </div>
                        </li>
                                {expandedModules[index] && module.lessons && module.lessons.map((lesson) => (
                                    <li key={lesson._id} className="list-group-item ms-3">
                                    <div className="flex-container">
                                        {lesson.name}
                                    </div>
                                    </li>
                                ))}
                            </React.Fragment>
                        ))
                }
            </ul>
        </div>
    );
}

export default Modules;