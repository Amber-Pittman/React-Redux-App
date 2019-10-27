import React from "react";

const ActivityButton= (props) => {
    return(
        <div>
            <button onClick={() => props.handleClick}>New Activity</button>
        </div>
    )
}

export ActivityButton;