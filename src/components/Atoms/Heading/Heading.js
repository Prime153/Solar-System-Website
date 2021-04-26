import React from 'react';
import PropTypes from 'prop-types';
import { HeadingText, Line } from './HeadingStyled';

const Title = ({ children }) => (
  <HeadingText>
    {children}
    <Line />
  </HeadingText>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
