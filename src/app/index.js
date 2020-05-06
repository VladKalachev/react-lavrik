import React from 'react';
import Order from '~p/order';
import Cart from '~p/cart';
import Result from '~p/result';

import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import router from '~s/router';

export default class extends React.Component {

    // state = {
    //     formData: {
    //         name: { 
    //             label: 'Your Name',
    //             value: ''
    //         },
    //         email: {
    //             label: 'Email',
    //             value: ''
    //         },
    //         phone: {
    //             label: 'Phone',
    //             value: ''
    //         }
    //     },
    //     activeRoute: 'CART'
    // }

   
    // changeFormData = (name, value) => {
    //     let formData = {...this.state.formData};
    //     formData[name] = {...formData[name], value};
    //     this.setState({formData});
    // }


    render(){
        return(
            <div className="container">
                {router.component}
            </div>
        ) 
    }
};