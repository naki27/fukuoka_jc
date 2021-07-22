import React from 'react';
import PropTypes from "prop-types";

export default function H2(props) {
  return (
    <h2 className="MuiTypography-root MuiTypography-h5 MuiTypography-colorPrimary MuiTypography-alignCenter MuiTypography-gutterBottom">
        {props.title}
    </h2>
  );
}

H2.propTypes = {
    title: PropTypes.string
};