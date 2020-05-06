import Order from '~p/Order';
import Cart from '~p/Cart';
import Result from '~p/Result';
import Post from '~p/Post';
import Page404 from '~p/error-404';

let routes = [
    {
        name: 'home',
        url: '/',
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
        name: 'blogPost',
        url: '/news/:url',
        component: Post,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

export default routes;

