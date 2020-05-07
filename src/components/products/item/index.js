import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
export default function(props) {
    let btn;

    if(props.inCart){
        btn = <Button variant="danger" onClick={props.onRemove}>
        Remove from cart
    </Button>
    } else {
        btn = <Button variant="success" onClick={props.onAdd}>
        Add to cart
    </Button>
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <hr/>
            <div>
                <strong>Prica: {props.price}</strong>
            </div>
            <Link to={props.backUrl} >back to list</Link>
            <p>Text about product</p>
            {btn}
        </div>
    )
}