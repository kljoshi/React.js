import React from "react"
import '../style.css';

function Joke(props){
    const ques = props.question;
    console.log(ques);
        if (!ques) {
            return(
                <div>
                    <h3 className="h3-item">{props.punchLine}</h3>
                    <hr/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Question: {props.question}</h1>
                    <h3 className="h3-item">{props.punchLine}</h3>
                    <hr/>
                </div>
            )
        }

}

export default Joke