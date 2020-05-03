import React from 'react';
import HW1 from './hw/1-simple';
import HW2 from './hw/2-input';
import HW3 from './hw/3-lazy';
import Derived from './hw/4-deriveds';
import HW4 from './hw/5-norm';

export default class extends React.Component {

    state = {
        products: [
            {
                id: 1,
                title: 'Iphon 200',
                price: 12000,
                rest: 10,
                currnet: 1
            },
            {
                id: 2,
                title: 'Samsung 200',
                price: 22000,
                rest: 10,
                currnet: 1
            }
        ]
    }
    render(){

        let productsRows = this.state.products.map((product, i) => {
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>Count</td>
                    <td>{product.price * product.currnet}</td>
               </tr>
            )
        });
        return(
            <div>
                <h2>Cars</h2>
                <table>
                    <tbody>
                         <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                        {productsRows}
                    </tbody>
                </table>
                
            </div>
        ) 
    }
};