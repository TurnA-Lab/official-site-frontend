import React from 'react';

export class ErrorPopup extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    console.log(error);

    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>无法获取到某些信息，请检查状态</h1>;
    }

    return this.props.children;
  }
}
