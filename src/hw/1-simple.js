import React from 'react';

/**
 * params:
 *  min: int
 *  max: int
 */
export default class extends React.Component {

    state = {
        cnt: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    };

    decrease = () => {
        this.set(this.state.cnt - 1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({ cnt })
    }

    render(){
        return(
            <div>
                <button onClick={this.decrease}> - </button>
                <strong>{this.state.cnt}</strong>
                <button onClick={this.increase}> + </button>
            </div>
        )
    }
};