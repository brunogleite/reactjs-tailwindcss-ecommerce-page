import PropTypes from 'prop-types';
import React from "react";

const ButtonControl = ({ handleClick, children, className }) => (
  <div onClick={(e) => handleClick(e.target.className)} type="button" className={className}>
    {children}
  </div>
);

export default ButtonControl;

ButtonControl.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};