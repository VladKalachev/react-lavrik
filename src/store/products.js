import {observable, computed, action } from 'mobx';

export default class Products {
    @observable items = [];

    constructor(rootStore){
        this.rootSote = rootStore;
        this.api = this.rootSote.api.products;
    }

    @computed get productsMap(){
        let map = {};

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
        });

        return map;
        // {'100': 0, '101': 1, }
    }

    @action load(){
       return new Promise((resolve, reject) => {
            this.api.all().then((data) => {
                this.items = data;
                resolve(true);
            });
        });
    }

    getById(id){
        let index = this.productsMap[id];

        if(index === undefined) {
            return null;
        }
        return  this.items[index];
    }
};
