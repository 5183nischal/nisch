import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";

export default function LayoutBlack({ children }) {
  return (
    <div className="mx-2/25 max-w-px1920 flex flex-col justify-center text-1p2r leading-1p9em md:flex-row md:mx-0 md:my-px60 md:text-3r md:leading-1p7em">
      <section
        id="nav-area-top"
        className="md:ml-px60 md:mr-px20 md:max-w-px300 md:flex-shrink"
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
