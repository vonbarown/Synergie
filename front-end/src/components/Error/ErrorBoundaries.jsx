import React, { Component } from "react";
import { ErrorPage } from "./ErrorPage";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
    // this.setSate({ hasError: true });
    // console.log("eerrrr", error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return <>{this.props.children} </>;
  }
}
