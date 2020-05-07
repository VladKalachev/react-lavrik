import React from 'react';
import {Link} from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <hr/>
            <div>
                <strong>Prica: {props.price}</strong>
            </div>
            <Link to={props.backUrl} >back to list</Link>
        </div>
    )
}