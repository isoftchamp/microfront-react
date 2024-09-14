import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  errorBoundary() {
    return <div>Error</div>;
  },
  loadRootComponent: () =>
    import(
      /* webpackChunkName: "people-root-component" */ "./root.component"
    ).then((mod) => mod.default),
});

export const { bootstrap, mount, unmount } = lifecycles;
