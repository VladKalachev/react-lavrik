import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';
import 'bootstrap/dist/css/bootstrap.min.css';

import cartModal from '~s/cart';
import router from '~s/router';
import {observer} from 'mobx-react';
export default @observer class extends React.Component {
    
    render() {
       
        let productsRows = cartModal.products.map((product, i) => {
          
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current}
                                   onChange={(cnt) => cartModal.change(i, cnt)} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => cartModal.remove(i)}>
                            X
                        </button>
                    </td>
               </tr>
            )
        });

        return(
            <React.Fragment>
            <h2>Cars</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>    
                    <tbody>
                        {productsRows}
                    </tbody>
                </table>
                <h3>Total: {cartModal.total}</h3>
                <hr/>
                <button className="btn btn-primary"
                        onClick={() => router.moveTo('order')}
                >
                    Send
                </button>
            </React.Fragment>
        )
    }
};