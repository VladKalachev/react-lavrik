import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~/inputs/minmax';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired
    }

    render() {
       let total = this.props.products.reduce((t, pr) => {
            return t + (pr.current * pr.price)
        }, 0);

        let productsRows = this.props.products.map((product, i) => {
          
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current}
                                   onChange={(cnt) => this.props.onChange(i, cnt)} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.props.onRemove(i)}>
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
                <h3>Total: {total}</h3>
                <hr/>
                <button className="btn btn-primary"
                        onClick={this.props.onSend}
                >
                    Send
                </button>
            </React.Fragment>
        )
    }
};