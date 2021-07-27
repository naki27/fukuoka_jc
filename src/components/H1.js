import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
export default function H1(props) {
  const componentsStyle = {
    h1Style: {
      margin: "2rem",
      textAlign: "center",
      color: "#C7243A",
      fontWeight: "400",
      fontSize: "2.125rem",
    }
  }

  const useStyles = makeStyles(componentsStyle);
  const classes = useStyles();

  return (
    <h1 className={classes.h1Style}>
        {props.title}
    </h1>
  );
}

H1.propTypes = {
    title: PropTypes.string
};