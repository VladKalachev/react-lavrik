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

    nativeInput = React.createRef();

    setValue = (value) => {
        this.nativeInput.current.value = value;
    }

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