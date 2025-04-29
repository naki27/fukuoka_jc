import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles/H1.module.scss";
export default function H1(props) {
  return (
    <h1 className={`${styles.h1Style} ${props.type}`}>
        {props.title}
    </h1>
  );
}

H1.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
};