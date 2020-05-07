import {observable, computed, action } from 'mobx';

export default class Products {
    @observable items = getProducts();

    constructor(rootStore){
        this.rootSote = rootStore;
    }

    @computed get productsMap(){
        let map = {};

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
        });

        return map;
        // {'100': 0, '101': 1, }
    }

    getById(id){
        let index = this.productsMap[id];

        if(index === undefined) {
            return null;
        }
        return  this.items[index];
    }
};
// server api
function getProducts(){
    return [
        {
            id: 1,
            title: 'Iphon 200',
            price: 12000,
            rest: 10
        },
        {
            id: 2,
            title: 'Samsung 200',
            price: 22000,
            rest: 10
        },
        {
            id: 101,
            title: 'Huavey 300',
            price: 32000,
            rest: 10
        },
        {
            id: 102,
            title: 'Nokia 3110',
            price: 32000,
            rest: 10
        }
    ]
} 