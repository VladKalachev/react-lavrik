import React from 'react';

/**
 * params:
 *  min: int
 *  max: int
 */
export default class extends React.Component() {

    state = {
        cnt: 0
    }

    increase = () => {
        this.setState({
            cnt: this.state.cnt + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increase}> - </button>
                <strong>{this.state.cnt}</strong>
                <button onClick={this.increase}> + </button>
            </div>
        )
    }
};