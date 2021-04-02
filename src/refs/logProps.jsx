import React from "react";

const LogPropsHoc = (WrappedComponent) => {
  class LogProps extends React.Component {
    componentDidMount(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return LogProps;
};

export default LogPropsHoc;
