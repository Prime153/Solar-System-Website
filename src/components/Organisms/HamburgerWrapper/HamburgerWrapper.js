import React, { useContext } from 'react';
import { ImCross as Exit } from 'react-icons/im';
import AppContext from '../../../context';
import Link from '../../Atoms/Link/Link';
import { Container, LinksContainer } from './HamburgerWrapperStyled';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init({
  delay: 0,
  duration: 300,
});

const HamburgerWrapper = () => {
  const [, changeHamburgerOpen] = useContext(AppContext);

  return (
    <AppContext.Consumer>
      {() => (
        <Container data-aos="fade-up">
          <LinksContainer onClick={() => changeHamburgerOpen(false)}>
            <Link path="#" title="Home" />
            <Link path="#services" title="Services" />
            <Link path="#calculator" title="Calculator" />
            <Link path="#contact" title="Contact" />
          </LinksContainer>
          <Exit onClick={() => changeHamburgerOpen(false)} />
        </Container>
      )}
    </AppContext.Consumer>
  );
};

export default HamburgerWrapper;
