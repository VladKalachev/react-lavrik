import {observable, computed, action } from 'mobx';

class Order {
    @observable formData = {
        name: { 
            label: 'Your Name',
            value: '',
            validator: val => /^[aA-zZ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null
        },
        phone: {
            label: 'Phone',
            value: '',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'От 7 до 15',
            valid: null
        },
        email: {
            label: 'Email',
            value: '',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Собака',
            valid: null
        }
    };

    @computed get formValid(){
        return Object.values(this.formData).every(field => field.valid);
    } 

    @computed get data(){
        let data = {};
        for(let name in this.formData){
            data[name] = this.formData[name].value;
        }
        return data;
    }

    @action change(key, value){
        let field = this.formData[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }

}

export default new Order();