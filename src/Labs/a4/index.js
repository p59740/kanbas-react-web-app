import ParentStateComponent from "./ParentStateComponent";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import DateStateVariable from "./DateStateVariable";
import StringStateVariables from "./StringStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent"; 
import React from "react";
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import Add from "./Add";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
    return(
    <div>
        <h1>Assignment 4</h1>
        <TodoList />
        <AddRedux />
        <CounterRedux />
        <ReduxExamples/>
        <ParentStateComponent />
        <ArrayStateVariable />
        <ObjectStateVariable/>
        <DateStateVariable />
        <StringStateVariables />
        <BooleanStateVariables />
        <Counter />
        <EventObject />
        <PassingFunctions theFunction={sayHello} />
        <PassingDataOnEvent />
        <ClickEvent />
        <Add a={1} b={2} />
    </div>
 );
};
export default Assignment4;