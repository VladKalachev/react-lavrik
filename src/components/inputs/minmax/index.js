import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../lazy';
import styles from './minmax.module.css';

export default class extends React.PureComponent {

    static defaultProps = {
        onChange: function() {}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool
    }

    lazyInput = React.createRef();

    increase = () => {
        this.set(this.props.cnt + 1);
    };

    decrease = () => {
        this.set(this.props.cnt - 1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.props.onChange(cnt);
        return cnt;
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let reaclCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
        if(reaclCnt.toString() !== e.target.value){
            this.lazyInput.current.setValue(reaclCnt);
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.decrease}
                        disabled={this.props.disabled 
                            || this.props.cnt <= this.props.min}
                >
                    -
                </button>
                <AppLazyInput 
                    netiveProps={{ 
                        type: 'text', 
                        className: styles.input,
                        disabled: this.props.disabled
                    }}
                    value={this.props.cnt}
                    onChange={this.onChange}
                    ref={this.lazyInput}
                />
                <button onClick={this.increase}
                        disabled={this.props.disabled 
                                    || this.props.cnt >= this.props.max}
                > 
                    +
                </button>
            </div>
        )
    }
};