import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>Hi, {name}!</h1>
// };

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   // constructor  () {
//   //   // def initialize
//   //   super(props);
//   // }

//   render() {
//     const { name } = this.props;
//     return (
//       <h1>Hi, {name}!</h1>
//     );
//   }
// }

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}