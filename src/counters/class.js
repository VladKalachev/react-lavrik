import React from 'react';

export default class extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cnt: 1
        }
     
    }

    increase() {
        this.setState({ cnt: this.state.cnt + 1})
    }

    render() {
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <hr/>
                <button onClick={this.increase.bind(this)} >Plus +</button>
            </div>
        )
    }
};