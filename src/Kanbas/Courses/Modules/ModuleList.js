import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSubtract,faCheckCircle, faEllipsisV,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './ModuleList.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import {BsTrash3Fill} from 'react-icons/bs';
import {LuPenSquare} from 'react-icons/lu';
import { findModulesForCourse,  createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    //A5
    console.log(courseId)
    useEffect(() => {
        findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId]);

    const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
    });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    
    
    //A5!
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    
    // const modules = db.modules;
    const [expandedModules, setExpandedModules] = useState({});

    const toggleModule = (index) => {
        setExpandedModules(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const checkIconStyle = { color: '#00a600' };
    const ellipsisIconStyle = { color: '#787878' };

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };
    

    return (
        <div>
            <ul className="list-group module-list w-100">
                {/* add new mudole buttons */}
                <li className="list-group-item">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup">
                            <button className='btn btn-danger btn-lg btn-block'  onClick={handleAddModule} > Add</button>
                                {/* <button className='btn btn-success btn-lg btn-block'  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button> */}
                                {/* <button className='btn btn-primary btn-lg btn-block' onClick={() => dispatch(updateModule(module))}>Update</button> */}
                            <button className='btn btn-primary btn-lg btn-block' onClick={handleUpdateModule}  >Update</button>

                            </span>
                        </div>
                        <input className ="form-control" value={module.name}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                        <textarea  className ="form-control" value={module.description}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </div>
                </li>


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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ flexGrow: 1 }}>
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faCheckCircle} style={checkIconStyle} />
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faCaretDown} style={ellipsisIconStyle} />
                                    {expandedModules[index] ?  <FontAwesomeIcon className="wd-icon-moreInter" icon={faSubtract} style={ellipsisIconStyle} /> : 
                                        <FontAwesomeIcon className="wd-icon-moreInter" icon={faPlus} style={ellipsisIconStyle} />}
                                    
                                    <FontAwesomeIcon className="wd-icon-moreInter" icon={faEllipsisV} style={ellipsisIconStyle} />
                                    </div>
                                    <div>
                                        {/* <button className="btn btn-danger btn-sm btn-block" onClick={() => dispatch(deleteModule(module._id))}> <BsTrash3Fill /> </button> */}
                                        <button className="btn btn-danger btn-sm btn-block" onClick={() => handleDeleteModule(module._id)} >  <BsTrash3Fill /> </button>
                                        <button className="btn btn-success btn-sm btn-block" onClick={() => dispatch(setModule(module))}> <LuPenSquare /> </button>
                                    </div>

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

export default ModuleList;