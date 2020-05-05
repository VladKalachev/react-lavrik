import React from 'react';
import Order from '~/order';
import Cart from '~/cart';
import Result from '~/redult';

import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component {

    state = {
        products: getProducts(),
        formData: {
            name: { 
                label: 'Your Name',
                value: ''
            },
            email: {
                label: 'Email',
                value: ''
            },
            phone: {
                label: 'Phone',
                value: ''
            }
        },
        activeRoute: 'CART'
    }

    changeCnt = (i, cnt) =>{
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt };
        this.setState({products});
    }

    remove = (i) => {
        let products = [...this.state.products]
        products.splice(i, 1);
        this.setState({products});
    }

    moveToCart = () => {
        this.setState({activeRoute: 'CART'});
    }

    moveToOrder = () => {
        this.setState({activeRoute: 'ORDER'});
    }

    moveToResult = () => {
        this.setState({activeRoute: 'RESULT'});
    }

    render(){
      

        let page;

        switch(this.state.activeRoute){
            case 'CART':
                page = <Cart 
                    products={this.state.products}
                    onChange={this.changeCnt}
                    onRemove={this.remove}
                    onSend={this.moveToOrder}
                />
                break;
            case 'ORDER':
                page = <Order />
                break;
            case 'RESULT':
                page = <Result />
                break;
            default:
                page = <div>404</div>
        }

        return(
            <div className="container">
                {page}
                {/* <hr/>
                <Button variant="primary" 
                        onClick={() => this.changeCnt(1, 4)} >
                    Unreal chenge cnt
                </Button> */}
            </div>
        ) 
    }
};

function showForm(productsRows, total, onSend) {
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
            <button onClick={onSend}>Send</button>
        </React.Fragment>
    )
}

function showCongrats() {
    return(
        <React.Fragment>
            <h2>Congratulations! Yout order in process!</h2>
            <div>111</div>
        </React.Fragment>
    )
}

function getProducts() {
    return [
        {
            id: 1,
            title: 'Iphon 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 2,
            title: 'Samsung 200',
            price: 22000,
            rest: 10,
            current: 1
        },
        {
            id: 3,
            title: 'Huavey 300',
            price: 32000,
            rest: 10,
            current: 1
        }
    ]
} 

