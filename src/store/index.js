import { configure } from 'mobx';
import cartStore from './cart';
import orderStore from './order';
import productsStore from './products';
import notificationsStore from './notifications';
import * as products from '~/api/products';
import * as cart from '~/api/cart';

// configure({ enforceActions: "observed" })
class RootStore {
    constructor(){
        this.api = {
            products,
            cart
        };
        this.storage = localStorage;
        this.cart = new cartStore(this);
        this.order = new orderStore(this);
        this.products = new productsStore(this);
        this.notifications = new notificationsStore(this);
    }
}

export default new RootStore();