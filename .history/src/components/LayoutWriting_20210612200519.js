import React from "react";
import PropTypes from "prop-types";
import styles from "../css/layoutWriting.module.css";
import Nav from "./nav";

export default function LayoutWhite({ children, yearList, writingInfo }) {
  return (
    <div className="flex flex-col md:flex-row">
      <section
        className={`${styles.flag} hidden md:block md:w-px10 md:overflow-hidden`}
      ></section>
      <section className="h-px100 my-px20 mx-3/50 order-4 md:h-auto md:w-px100 md:ml-px10 md:mr-px20 md:mt-px80 md:order-none">
        <div className="text-center md:text-right md:sticky md:top-px50 md:leading-3p5em">
          <Nav sideBarOnMd={true} bgLight={true}></Nav>
          {writingInfo}
        </div>
      </section>
      <section className="hidden lg:block lg:w-px100 lg:mx-px10 lg:mt-px150 lg:mb-px50">
        {yearList}
      </section>
      {children}
    </div>
  );
}

LayoutWhite.propTypes = {
  children: PropTypes.node,
  yearList: PropTypes.node,
  writingInfo: PropTypes.node,
};
