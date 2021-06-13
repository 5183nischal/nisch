import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Menus = [
  {
    value: "△",
    title: "Home",
    link: "/",
  },
  {
    value: "Essays",
    title: "Longfrom articles",
    link: "/essays",
  },
  {
    value: "Work",
    title: "Research and Consulting work",
    link: "/work",
  },
  // {
  //   value: "Photos",
  //   title: "Photography",
  //   link: "/photos",
  // },
  // {
  //   value: "Now",
  //   title: "What I'm doing now",
  //   link: "/now",
  // },
  {
    value: "About",
    title: "About me &amp; this site",
    link: "/about",
  },
  // {
  //   value: "☰",
  //   title: "Sitemap",
  //   link: "/sitemap",
  // },
];

export default function Nav({ sideBarOnMd, bgLight }) {
  return (
    <nav className="inline-block font-helvetica text-5r font-thin uppercase">
      <ul>
        {Menus.map((menuItem) => {
          return (
            <li
              key={menuItem.value}
              className={`mx-px30 float-left ${
                sideBarOnMd ? "md:float-none" : ""
              }`}
            >
              <Link
                to={menuItem.link}
                title={menuItem.title}
                className={`border-b-2 ${
                  bgLight
                    ? "border-white hover:border-black"
                    : "border-white hover:border-red"
                }`}
              >
                {menuItem.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  sideBarOnMd: PropTypes.bool,
  bgLight: PropTypes.bool,
};
