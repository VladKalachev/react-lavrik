import React from 'react';
import {observer} from 'mobx-react';
import cartModal from '~s/cart';
import orderModal from '~s/order';
import 'bootstrap/dist/css/bootstrap.min.css';

export default @observer class extends React.Component {

    render() {
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModal.data.name}!</p>
                <p><strong>Total: {cartModal.total}</strong></p>
            </div>
        ) 
    }
};