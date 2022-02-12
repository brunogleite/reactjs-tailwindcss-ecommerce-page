import PropTypes from 'prop-types';
import React from "react";

const ButtonControl = ({ children }) => (
  <div type="button">
    {children}
  </div>
);

export default ButtonControl;

ButtonControl.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};