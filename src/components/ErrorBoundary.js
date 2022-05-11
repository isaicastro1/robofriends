import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>Ooops. Something went wrong</h1>
        }
        else {
            return (
                this.props.children
            )
        }
    }
}

export default ErrorBoundary;