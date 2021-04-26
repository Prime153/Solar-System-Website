import React from 'react';
import ButtonInfoWrapper from '../../Molecules/ButtonInfoWrapper/ButtonInfoWrapper';
import PropTypes from 'prop-types';
import { Container, Picture } from './ServiceWrapperStyled';

const ServiceWrapper = ({ photo, change, heading }) => (
  <Container data-aos="fade-right" change={change}>
    <ButtonInfoWrapper heading={heading} change={change} />
    <Picture src={photo} change={change} />
  </Container>
);

ServiceWrapper.propTypes = {
  photo: PropTypes.string,
  change: PropTypes.string,
  heading: PropTypes.string,
};
export default ServiceWrapper;
