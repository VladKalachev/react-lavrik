import React from 'react';
import Order from '~p/order';
import Cart from '~p/cart';
import Result from '~p/result';

import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react';
import router from '~s/router';

@observer class App extends React.Component {

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

export default App;