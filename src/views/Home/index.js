import React, { Fragment } from "react";

// components
import { Header, Values, Description } from "./components";

export default () => {
  return (
    <Fragment>
      <Header />
      <Description />
      <Values />
    </Fragment>
  );
};
