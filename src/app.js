import React from 'react';
import AppMinMax from './hw/5-norm';

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

    changeCnt = (i, cnt) => {
        // по смыслу this.state.products[i].current = cnt; 
        let newProducts = [...this.state.products];
        let newProduct = {...newProducts[i]};
        newProduct.currnet = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});
    }

    render(){

        let productsRows = this.state.products.map((product, i) => {
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.currnet}
                                   onChange={(cnt) => this.changeCnt(i, cnt)} />
                    </td>
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