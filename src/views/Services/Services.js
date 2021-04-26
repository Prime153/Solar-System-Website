import React from 'react';
import ServiceWrapper from '../../components/Organisms/ServiceWrapper/ServiceWrapper';
import Line from '../../components/Atoms/Line/Line';
import ManufacturerWrapper from '../../components/Organisms/ManufacturerWrapper/ManufacturerWrapper';
import ServicePhoto1 from '../../assets/ServicePhoto1.png';
import ServicePhoto2 from '../../assets/ServicePhoto2.png';
import ButtonInfoWrapper from '../../components/Molecules/ButtonInfoWrapper/ButtonInfoWrapper';
import { Container, OceanContainer } from './ServicesStyled';

const Services = () => (
  <>
    <Container id="services">
      <ServiceWrapper photo={ServicePhoto1} heading="Homes" />
    </Container>
    <ManufacturerWrapper />
    <Container>
      <ServiceWrapper
        photo={ServicePhoto2}
        change="second"
        heading="Companies"
      />
      <Line />
    </Container>
    <OceanContainer>
      <ButtonInfoWrapper change="ocean" heading="Save nature" />
    </OceanContainer>
  </>
);
export default Services;
