function JsonPre({json}){
    return (
        <pre> // pre for purify print
        <code>{JSON.stringify(json, null ,2)}</code>    
        </pre>
    );
}

export default JsonPre;