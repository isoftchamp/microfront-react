import React from "react";
import App from "./App";

export default function Root(props) {
  return (
    <React.Fragment>
      <p>{props.name} is mounted!</p>
      <App {...props} />
    </React.Fragment>
  );
}
