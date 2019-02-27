import React from "react"

function Conditional(props){
    //conditon ? if true : else false 
    
    let log;
    let buttonName;
    if (props.state){
      log = "in";
      buttonName = "Log Out";
    }
    else {
      log = "out"
      buttonName = "Log In";
    }

    return (
        <div>
        <h1> You are logged: {log}</h1>
        <button onClick={props.handleClick}>{buttonName}</button>
      </div>
    )
}

export default Conditional 