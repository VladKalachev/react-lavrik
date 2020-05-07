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
    let cart = props.stores.cart;

    if(product === null){
        return <E404 />
    } else {
        return <ProductItem 
                    title={product.title} 
                    price={product.price} 
                    backUrl={routesMap.home}
                    inCart={cart.inCart(product.id)}
                    onAdd={() => cart.add(product.id)}
                    onRemove={() => cart.remove(product.id)}
                />
    }
}))