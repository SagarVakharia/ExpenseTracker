import './Card.css';
import React from 'react';


function Card(props) {
    const clasess = 'card '  + props.className; //to fix our broken styling :- so anything we riece outside class is added to that string
    return(
        <div className={clasess}>{props.children}</div>
    );
}

export default Card;