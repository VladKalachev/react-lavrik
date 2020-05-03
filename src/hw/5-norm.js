import React from 'react';
import PropTypes from 'prop-types';

/**
 * Однонаправленный поток данных
 * params:
 *  min: int
 *  max: int
 */
export default class extends React.Component {

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired
    }

    state = {
        inputValue: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    };

    decrease = () => {
        this.set(this.state.cnt - 1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            inputValue: cnt
        })

        // как-то сказать родителю что обновлся
    }

    setValue(newStr){
        this.setState({
            inputValue: newStr
        });
    }

    applayValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.applayValue();
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.decrease}> - </button>
                <input value={this.state.inputValue} 
                        onChange={(e) => this.setValue(e.target.value)}
                        onBlur={this.applayValue}
                        onKeyUp={this.checkEnterKey}
                />
                <button onClick={this.increase}> + </button>
            </div>
        )
    }
};