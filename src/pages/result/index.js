import React from 'react';
import {observer} from 'mobx-react';
import cartModal from '~s/cart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default @observer class extends React.Component {

    render() {
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Total: {cartModal.total}</p>
            </div>
        ) 
    }
};