import React from 'react';
import {useParams, Link} from 'react-router-dom';
import productModel from '~s/products';
import routesMap from '~/routes/routesMap';

export default function(props) {
    let {id} = useParams();
    let product = productModel.getById(id);
    
    return (
        <div>
            <h2>{product.title}</h2>
            <hr/>
            <div>
                <strong>Prica: {product.price}</strong>
            </div>
            <Link to={routesMap.home} >back to list</Link>
        </div>
    )
}