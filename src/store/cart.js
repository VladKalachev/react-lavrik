import {observable, computed, action } from 'mobx';

export default class Cart {
    @observable products = [];

    constructor(rootStore){
        this.rootSote = rootStore;
    }

    @computed get productsDetailed() {
        return this.products.map((pr) => {
            let product = this.rootSote.products.getById(pr.id);
            return {...product, cnt: pr.cnt };
        });
    }

    @computed get inCart(){
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get cartCnt(){
        return this.products.length;
    }

    @computed get total() {
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
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
            this.products.splice(index, 1);
        }
    }
};