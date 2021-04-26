import React from 'react';
import Button from '../../Atoms/Button/Button';
import PropTypes from 'prop-types';
import Heading from '../../Atoms/Heading/Heading';
import { Container, Text } from './ButtonInfoWrapperStyled';

const ButtonInfoWrapper = ({ heading, change }) => (
  <Container data-aos="fade-up" change={change}>
    <Heading>{heading}</Heading>
    <Text change={change}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </Text>
    <Button>Read more</Button>
  </Container>
);

ButtonInfoWrapper.propTypes = {
  heading: PropTypes.string,
  change: PropTypes.string,
};

export default ButtonInfoWrapper;
