import Order from '~p/Order';
import Cart from '~p/Cart';
import Result from '~p/Result';
import Page404 from '~p/error-404';
import ProductList from '~p/products/list';
import ProductItem from '~p/products/item';

let routes = [
    {
        name: 'home',
        url: '/',
        component: ProductList,
        exact: true
    },
    {
        name: 'product',
        url: '/product/:id',
        component: ProductItem,
        exact: true
    },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

export default routes;

