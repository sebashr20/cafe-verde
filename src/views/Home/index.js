import React, { Fragment } from "react";

// components
import {
  Header,
  Values,
  Description,
  Footer,
  MoreDescription,
  Navbar,
} from "./components";

export default () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Description />
      <MoreDescription />
      <Values />
      <Footer />
    </Fragment>
  );
};
