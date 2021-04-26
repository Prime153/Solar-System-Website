import React from 'react';
import {
  Container,
  InfoTextWrapper,
  Link,
} from './HomeInfoWrapperStyled';

const InfoWrapper = () => (
  <Container>
    <InfoTextWrapper first>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt
    </InfoTextWrapper>
    <InfoTextWrapper second>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum."
    </InfoTextWrapper>
    <InfoTextWrapper third>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt
    </InfoTextWrapper>
    <Link href="#">Find out what makes us the best »</Link>
  </Container>
);

export default InfoWrapper;
