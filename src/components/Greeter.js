import React from 'react';

class Greeter extends React.Component {
    render() {
        return (
            <h1>Hello again, {this.props.name || "You"}. Welcome back!</h1>
        )
    }
}

export default Greeter;