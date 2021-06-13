import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";

export default function LayoutBlack({ children }) {
  return (
    <div className="my-px50 md:my-px20">
      <section
        id="nav-area-top"
        className="hidden md:block md:mx-px60 md:my-px30 md:text-2r"
      >
        <Nav></Nav>
      </section>
      {children}
      <section
        id="nav-area-bottom"
        className="h-px100 mx-2/25 my-px20 min-w-px100 md:hidden"
      >
        <div className="text-center">
          <Nav></Nav>
        </div>
      </section>
    </div>
  );
}

LayoutBlack.propTypes = {
  children: PropTypes.node,
};
