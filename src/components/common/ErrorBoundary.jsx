import React, {Component} from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(error);
        console.log(info);
    }

    render() {
      
        const errorFallBack = <h1>Something went wrong.</h1>;
        return this.state.hasError ? errorFallBack : this.props.children;
    }
}