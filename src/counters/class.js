import React from 'react';

export default class extends React.Component {

    state = {
        cnt: 0
    }

    increase = () => {
        this.setState({ cnt: this.state.cnt + 1})
    }

    render() {
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <hr/>
                <button onClick={this.increase} >Plus +</button>
            </div>
        )
    }
};