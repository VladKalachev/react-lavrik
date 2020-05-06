import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import cartModal from '~s/cart.js';
export default class extends React.Component {

    render() {
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Total: {cartModal.total}</p>
            </div>
        ) 
    }
};