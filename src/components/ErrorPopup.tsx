import React from 'react';
import { toast } from 'react-toastify';

export class ErrorPopup extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    console.log(error);

    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      toast.error('无法获取到某些信息，请检查状态');
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
