import {observable, computed, action } from 'mobx';
import productsStore from './products';

class Cart {
    @observable products = [{id: 101, cnt: 2}];

    @computed get total() {
        return this.products.reduce((t, pr) => {
            let product = productsStore.getById(pr.id);
            return t + product.price * pr.cnt;
        }, 0);
    }

    @action add(id) {
        this.products.push({id, cnt: 1});
    }

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id );
        if(index !== -1 ){
            this.products[index].cnt = cnt;
        }
    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id );
        if(index !== -1 ){
            this.products.splice(i, 1);
        }
    }
}

export default new Cart();