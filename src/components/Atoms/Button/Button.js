import React from 'react';
import PropTypes from 'prop-types';
import { StyleButton, InnerText } from './ButtonStyled';

const Button = ({ children }) => (
  <StyleButton>
    <InnerText>{children}</InnerText>
  </StyleButton>
);

Button.propTypes = {
  send: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
