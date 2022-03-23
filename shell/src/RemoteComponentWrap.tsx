import React, { Suspense } from "react";

type State = { hasError: boolean };

export default class RemoteComponentWrap extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      return <h4>Can't load remote component</h4>;
    }
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {this.props.children}
      </Suspense>
    );
  }
}
