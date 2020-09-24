import React from 'react';

function BoxImg(props) {
    
    return (
        <img src={props.link} alt={`${props.alt}`}/>
    );

}
export default BoxImg;
