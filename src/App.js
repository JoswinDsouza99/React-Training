import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'User' };
    }

    render() {
        return <h1>Hello, {this.state.name}</h1>;
    }
}

export default Greeting;