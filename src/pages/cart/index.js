import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import cartModal from '~s/cart';
import {observer} from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import routesMap from '~/routes/routesMap';

@observer class Cart extends React.Component {
     
    render() {
  
        let productsRows = cartModal.products.map((product, i) => {
          
            return(
                <tr key={product.id}>
                    <td>1</td>
                    <td>2</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={5} 
                                   cnt={product.cnt}
                                   onChange={(cnt) =>  cartModal.change(product.id, cnt)} />
                    </td>
                    <td>{1 * product.current}</td>
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
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </React.Fragment>
        )
    }
};

export default Cart;