import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../lazy/lazy.js';
import styles from './minmax.module.css';
export default class extends React.Component {

    static defaultProps = {
        onChange: function() {}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    };

    decrease = () => {
        this.set(this.props.cnt - 1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.props.onChange(cnt);
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    render(){
        return(
            <div>
                <button onClick={this.decrease}> - </button>
                <AppLazyInput 
                    netiveProps={{ type: 'text', className: styles.input }}
                    value={this.props.cnt}
                    onChange={this.onChange}
                />
                <button onClick={this.increase}> + </button>
            </div>
        )
    }
};