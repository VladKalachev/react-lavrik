import React from 'react';
import AppMinMax from './inputs/minmax/minmax';

export default class extends React.Component {

    state = {
        products: getProducts(),
        formDone: false
    }

    changeCnt(i, cnt) {
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt };
        this.setState({products});
    }

    remove(i){
        let products = [...this.state.products]
        products.splice(i, 1);
        this.setState({products});
    }

    sendForm = () => {
        this.setState({formDone: true});
    }

    unrealChange = () => {
        let products = [...this.state.products]
        this.setState({})
    }

    render(){
        let total = this.state.products.reduce((t, pr) => {
            return t + (pr.current * pr.price)
        }, 0);

        let productsRows = this.state.products.map((product, i) => {
          
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current}
                                   onChange={(cnt) => this.changeCnt(i, cnt)} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.remove(i)}>
                            X
                        </button>
                    </td>
               </tr>
            )
        });

        let page = !this.state.formDone ? 
                    showForm(productsRows, total, this.sendForm):
                    showCongrats();
        return(
            <div>
                {page}
                <hr/>
                <button onClick={() => this.changeCnt(1, 4)} >
                    Unreal chenge cnt
                </button>
            </div>
        ) 
    }
};

function showForm(productsRows, total, onSend) {
    return(
        <React.Fragment>
            <h2>Cars</h2>
                <table>
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

