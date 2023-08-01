import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>Something went wrong! </p>
          <p>
            SuccessFully generated our own errror and catched it and displayed
            it on the screen
          </p>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
