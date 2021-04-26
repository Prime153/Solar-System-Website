import React from 'react';
import PropTypes from 'prop-types';
import { Container, Word } from './HeadingTwoFacesStyled';

const HeadingTwoFaces = ({ firstW, secondW }) => (
  <Container>
    <Word>{firstW}</Word>
    <Word second>{secondW}</Word>
  </Container>
);

HeadingTwoFaces.propTypes = {
  firstW: PropTypes.string.isRequired,
  secondW: PropTypes.string.isRequired,
};

export default HeadingTwoFaces;
