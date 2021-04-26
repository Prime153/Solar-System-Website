import React from 'react';
import MainTitle from '../../components/Atoms/MainTitle/MainTitle';
import CardWrapper from '../../components/Organisms/CardWrapper/CardWrapper';
import HomeInfo from '../../components/Molecules/HomeInfo/HomeInfo';
import HomeInfoWrapper from '../../components/Molecules/HomeInfoWrapper/HomeInfoWrapper';
import {
  HomeContainer,
  InfoContainer,
  InfoContainer2,
} from './HomeTemplateStyled';

const HomeTemplate = () => (
  <>
    <HomeContainer id="test">
      <MainTitle />
    </HomeContainer>
    <InfoContainer>
      <HomeInfo />
      <CardWrapper />
    </InfoContainer>
    <InfoContainer2>
      <HomeInfoWrapper />
    </InfoContainer2>
  </>
);

export default HomeTemplate;
