import React from "react";

function ActivityButton(props) {
    return(
        <div>
            <button onClick={() => props.handleClick}>New Activity</button>
        </div>
    )
}

export default ActivityButton;