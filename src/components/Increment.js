import React from 'react';

function Increment(props) {
    return (<button className={"btn hoverFloat"} onClick={() => props.handleClick(props.step)}>
        {props.step > 0 ? '+' : '' }
        {props.step}
        </button>)
}

export default Increment 