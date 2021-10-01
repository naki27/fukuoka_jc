import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

export default function H2(props) {
  const componentsStyle = {
    h2Style: {
      marginTop: "0",
      marginBottom: "0.35rem",
      textAlign: "left",
      color: "#C7243A",
      fontWeight: "500",
      borderBottom: "1px #C7243A solid",
      borderLeft: "8px #C7243A solid",
      paddingLeft: "5px",
      paddingBottom: "1px",
    }
  }

  const useStyles = makeStyles(componentsStyle);
  const classes = useStyles();

  return (
    <h2 className={classes.h2Style} >
        {props.title}
    </h2>
  );
}

H2.propTypes = {
    title: PropTypes.string
};