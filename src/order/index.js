import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired
    }
    
    render() {
        let formFields = [];
        for(let name in this.props.formData){
            let field = this.props.formData[name];
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text" />
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
                 <Button variant="primary" onClick={this.props.onSend}>
                     Applay Order
                 </Button>
            </div>
        ) 
    }
};