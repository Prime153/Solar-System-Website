import React from 'react';
import Heading from '../../Atoms/Heading/Heading';
import {
  Container,
  Content,
  Text,
  LowerText,
} from './ManufacturerWrapperStyled';

const ManufacturerWrapper = () => (
  <Container>
    <Heading>Manufacturer's Guarantees</Heading>
    <Content>
      <Text>
        10 years
        <LowerText>to inverter</LowerText>
      </Text>
      <Text>
        25 years
        <LowerText>at 85% efficiency of the panels</LowerText>
      </Text>
      <Text>
        10 years
        <LowerText>for panel defects </LowerText>
      </Text>
    </Content>
  </Container>
);

export default ManufacturerWrapper;
