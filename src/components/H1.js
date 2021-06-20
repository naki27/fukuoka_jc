import React from 'react';
import PropTypes from "prop-types";

export default function H1(props) {
  return (
    <h1 className="MuiTypography-root MuiTypography-h4 MuiTypography-colorPrimary MuiTypography-alignCenter MuiTypography-gutterBottom">
        {props.title}
    </h1>
  );
}

H1.propTypes = {
    title: PropTypes.string
};