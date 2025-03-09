import React from "react";
// nodejs library that concatenates styles
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import styles from "./styles/Parallax.module.scss";
import Image from 'next/image';
export default function Parallax(props) {
  let windowScrollTop;
  // if (process.browser && window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  // const [transform, setTransform] = React.useState(
  //   "translate3d(0," + windowScrollTop + "px,0)"
  // );
  // React.useEffect(() => {
  //   if (process.browser && window.innerWidth >= 768) {
  //     window.addEventListener("scroll", resetTransform);
  //   }
  //   return function cleanup() {
  //     if (process.browser && window.innerWidth >= 768) {
  //       window.removeEventListener("scroll", resetTransform);
  //     }
  //   };
  // });
  // const resetTransform = () => {
  //   if (!process.browser) {
  //     return;
  //   }
  //   var windowScrollTop = window.pageYOffset / 3;
  //   setTransform("translate3d(0," + windowScrollTop + "px,0)");
  // };
  const { filter, className, children, style, image, small } = props;
  const parallaxStyles = classNames({
    [styles.parallax]: true,
    [styles.filter]: filter,
    [styles.small]: small,
    [className]: className !== undefined
  });
  return (
    <div
      className={parallaxStyles}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        // transform: transform
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
