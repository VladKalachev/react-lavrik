import React from 'react';

export default class extends React.Component {
    render() {
        console.log(this.props.match.params.url)
        return (
            <div>
                Post {this.props.match.params.url}
            </div>
        )
    }
}