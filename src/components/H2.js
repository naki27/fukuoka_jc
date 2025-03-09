import React from 'react';
import PropTypes from "prop-types";
import styles from "./styles/H2.module.scss";

export default function H2(props) {
  return (
    <h2 className={styles.h2Style} >
        {props.title}
    </h2>
  );
}

H2.propTypes = {
    title: PropTypes.string
};