import cartStore from './cart';
import orderStore from './order';
import productsStore from './products';

class RootStore {
    constructor(){
        this.cart = new cartStore(this);
        this.order = new orderStore(this);
        this.products = new productsStore(this);
    }
}

export default new RootStore();