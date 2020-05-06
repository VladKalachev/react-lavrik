import React from 'react';
import Order from '~p/order';
import Cart from '~p/cart';
import Result from '~p/result';

import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react';
import router from '~s/router';

@observer class App extends React.Component {
   
    render(){
        return(
            <div className="container">
                {router.component}
            </div>
        ) 
    }
};

export default App;