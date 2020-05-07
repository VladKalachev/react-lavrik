import React from 'react';
import E404 from '~c/errors/404';
import {useParams} from 'react-router-dom';
import routesMap from '~/routes/routesMap';
import ProductItem from '~c/products/item';
import {inject, observer} from 'mobx-react';

export default inject('stores')(observer(function(props) {
    let {id} = useParams();
    let productModel = props.stores.products;
    let product = productModel.getById(id);
    
    if(product === null){
        return <E404 />
    } else {
        return <ProductItem 
                    title={product.title} 
                    price={product.price} 
                    backUrl={routesMap.home}
                />
    }
}))