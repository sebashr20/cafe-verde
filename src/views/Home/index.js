import React, { Fragment } from "react";

// components
import {
  Header,
  Values,
  Description,
  Footer,
  MoreDescription,
} from "./components";

export default () => {
  return (
    <Fragment>
      <Header />
      <Description />
      <MoreDescription />
      <Values />
      <Footer />
    </Fragment>
  );
};
