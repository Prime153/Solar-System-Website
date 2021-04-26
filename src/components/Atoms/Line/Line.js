import React from 'react';
import PropTypes from 'prop-types';
import { Container, Line } from './LineStyled';

const LineWrapper = ({ change }) => (
  <Container change={change}>
    <Line change={change} />
  </Container>
);

LineWrapper.propTypes = {
  change: PropTypes.string,
};

export default LineWrapper;
