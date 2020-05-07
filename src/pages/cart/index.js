import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import withStore from '~/hocs/withStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import routesMap from '~/routes/routesMap';
import LinkButton from '~c/links/button';

class Cart extends React.Component {
     
    render() {
        let cartModal = this.props.stores.cart;
        let productsRows = cartModal.productsDetailed.map((product, i) => {
          
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.cnt}
                                   onChange={(cnt) =>  cartModal.change(product.id, cnt)} />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button onClick={() => cartModal.remove(product.id)}>
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
                <LinkButton to={routesMap.order} className="btn btn-primary">
                    Send
                </LinkButton>
            </React.Fragment>
        )
    }
};

export default withStore(Cart);