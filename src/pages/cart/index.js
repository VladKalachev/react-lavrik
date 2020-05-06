import React from 'react';
// import rr from '../../routes';
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
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current}
                                   onChange={cartModal.changeOn[i]} />
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
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </React.Fragment>
        )
    }
};

export default Cart;