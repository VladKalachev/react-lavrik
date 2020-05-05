import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

    static defaultProps = {
        onChange: function(e) {},
        netiveProps: {}
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        netiveProps: PropTypes.object
    }

    componentDidUpdate(prevProps, prevState){
        let inp = this.nativeInput.current;
        if(prevProps.value !== this.props.value || 
             this.props.value != inp.value 
        ){
            inp.value = this.props.value;
        }
    }

    nativeInput = React.createRef();

    checkChange = (e) => {
        if(this.props.value.toString() !== e.target.value) {
            this.props.onChange(e);
        }
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.checkChange(e);
        }
    }

    render(){
        return(
            <input {...this.props.netiveProps}
                    defaultValue={this.props.value}
                    onBlur={this.checkChange}
                    onKeyUp={this.checkEnterKey}
                    ref={this.nativeInput}
            />
        )
    }
};