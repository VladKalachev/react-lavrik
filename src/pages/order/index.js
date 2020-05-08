import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import {observer, inject} from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import routesMap from '~/routes/routesMap';

@inject('stores') @observer class Order extends React.Component {
    state = {
        showModal: false
    }

    show = () => {
        this.setState({showModal: true})
    }

    hide = () => {
        this.setState({showModal: false})
    }

    confirm = () => {
        this.props.stores.order.send().then(() => {
            this.hide();
            this.props.history.push(routesMap.result);
        });
    }
    
    render() {
        let orderModal = this.props.stores.order;
        let formFields = [];
        for(let name in orderModal.formData){
            let field = orderModal.formData[name];
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text"
                                  value={field.value}
                                  onChange={(e) => orderModal.change(name, e.target.value) }/>
                    {field.valid === null || field.valid ? '' : (
                        <Form.Text className='text-muted' >
                            {field.errorText}
                        </Form.Text>
                    )}
                </Form.Group>
            );
        }

        return(
            <div>
                 <h2>Order</h2>
                 <hr/>
                 <Form>
                     {formFields}
                 </Form>
                 <Link className="btn btn-warning" to={routesMap.home}>
                     Back to Cart
                 </Link>
                 &nbsp;
                 <Button variant="primary" onClick={this.show} disabled={!orderModal.formValid}>
                     Applay Order
                 </Button>

                 <Modal show={this.state.showModal} 
                        backdrop="static"
                        onHide={this.hide}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Content
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hide}>
                        Ooops
                    </Button>
                    <Button variant="primary" onClick={this.confirm}>
                       All right
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        ) 
    }
};

export default Order;