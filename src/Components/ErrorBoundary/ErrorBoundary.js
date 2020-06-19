import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMesseage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMesseage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMesseage}</h1>;
        } else {
            return this.props.childern;
        }
    }
}

export default ErrorBoundary;