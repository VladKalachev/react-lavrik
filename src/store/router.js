import React from 'react';
import Cart from '~p/Cart';
import Order from '~p/Order';
import Result from '~p/Result';

class Router{
    routes = {
        cart: () => <Cart />,
        order: () => <Order />,
        result: () => <Result />
    }

    activeRoute = "cart";

    get component() {
        return this.routes[this.activeRoute]();
    }

    moveTo(route){
        // проверить есть ли роут в списке
        this.activeRoute = route;
    }
}

export default new Router();