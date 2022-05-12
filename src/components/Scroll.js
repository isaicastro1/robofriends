import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll',  border: '5px solid lightgreen', height: '80vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
