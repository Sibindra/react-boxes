import React from "react";

export default function Box(props) {

    const toggleColor={
        backgroundColor:props.status?"#16A34A":"#E13A2D"
    }

    return (
        <div className="box" key={props.id} status={props.status} style={toggleColor} onClick={()=>props.handleClick(props.id)}>
            {/* {props.id} */}
        </div>
    );
}
