import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired
    }

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
        this.hide();
        this.props.onSend();
    }
    
    render() {
        let formFields = [];
        for(let name in this.props.formData){
            let field = this.props.formData[name];
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text"
                                  value={field.value}
                                  onChange={(e) => this.props.onChange(name, e.target.value) }/>
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
                 <Button variant="warning" onClick={this.props.onBack}>
                     Back to Cart
                 </Button>
                 &nbsp;
                 <Button variant="primary" onClick={this.show}>
                     Applay Order
                 </Button>

                 <Modal show={this.state.showModal} backdrop="static">
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