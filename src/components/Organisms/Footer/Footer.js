import React from 'react';
import Line from '../../Atoms/Line/Line';
import Link from '../../Atoms/Link/Link';
import { Container, FooterContainer, TextContainer, FooterHeading } from './FooterStyled';

const Footer = () => (
  <>
    <Line />
    <Container>
      <FooterContainer>
        <TextContainer>
          <FooterHeading>Abous Us</FooterHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,{' '}
        </TextContainer>
        <TextContainer>
          <FooterHeading>Free Quote</FooterHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,{' '}
        </TextContainer>
        <TextContainer>
          <FooterHeading>Contact</FooterHeading>
          SolarSystem <div> Nowa 1 99 - 999 Warszawa</div>
          <div> biuro@solarsystem.pl </div>
          888 - 8888 - 888
        </TextContainer>
      </FooterContainer>
      <FooterContainer middle>
        <TextContainer middle>
          <Link name="footer" path="#" title="Home" />
        </TextContainer>
        <TextContainer middle>
          <Link name="footer" path="#services" title="Services" />
        </TextContainer>
        <TextContainer middle>
          <Link name="footer" path="#calculator" title="Calculator" />
        </TextContainer>
        <TextContainer middle>
          <Link name="footer" path="#contact" title="Contact" />
        </TextContainer>
      </FooterContainer>
      <FooterContainer bottom>
        <TextContainer bottom>Jakub Imiołczyk</TextContainer>
        <TextContainer bottom>@2021 SolarSystem</TextContainer>
      </FooterContainer>
    </Container>
  </>
);

export default Footer;
