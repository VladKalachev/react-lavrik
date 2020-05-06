import React from 'react';
import {observable, computed, action } from 'mobx';
import Cart from '~p/Cart';
import Order from '~p/Order';
import Result from '~p/Result';

class Router{
    routes = {
        cart: () => <Cart />,
        order: () => <Order />,
        result: () => <Result />
    }

    @observable activeRoute = "cart";

    @computed get component() {
        return this.routes[this.activeRoute]();
    }

    @action moveTo(route){
        // проверить есть ли роут в списке
        this.activeRoute = route;
    }
}

export default new Router();