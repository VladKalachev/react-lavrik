import {observable, computed, action } from 'mobx';

class Cart {
    @observable products = getProducts();

    @computed get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
    }

    @action change(i, cnt){
        this.products[i].current = cnt;
    }

    @action remove(i){
        this.products.splice(i, 1);
    }
}

// server api
function getProducts() {
    return [
        {
            id: 1,
            title: 'Iphon 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 2,
            title: 'Samsung 200',
            price: 22000,
            rest: 10,
            current: 1
        },
        {
            id: 3,
            title: 'Huavey 300',
            price: 32000,
            rest: 10,
            current: 1
        }
    ]
} 

export default new Cart();