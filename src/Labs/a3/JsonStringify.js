import JsonPre from "./JsonPre";
const JsonStringify = () => {
    const squares = [1, 4, 16, 25, 36];

    return (
        <>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
            <JsonPre json={squares}/>
        </>
    );
}

export default JsonStringify;