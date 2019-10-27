import React from "react";

export default function Activity(props) {
    console.log(props, "This is the Activity comp props");

    return (
        <div className="display">
            <div className="activity"><h4>{props.activity}</h4></div>
        </div>
    )
}