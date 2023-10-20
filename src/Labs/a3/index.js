import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Classes from "./Classes";
import Styles from "./Styles";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";
function Assignment3() { 
    return (
    <div className="container"> 
        <h1>Assignment 3</h1>
        <TodoItem/>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
    </div> );
    }
export default Assignment3;