import React, { useState } from 'react';
import Logo from '../../../assets/Logo.webp';
import { HashLink } from 'react-router-hash-link';
import HamburgerWrapper from '../../Organisms/HamburgerWrapper/HamburgerWrapper';
import AppContext from '../../../context';
import {
  Container,
  LogoContainer,
  LogoIcon,
  LinkContainer,
  LinkChild,
  Hamburger,
} from './NavBarStyled';

const Navbar = () => {
  const [navBar, changeNavBar] = useState(false);
  const [hamburgerOpen, changeHamburgerOpen] = useState(false);

  const NavBarResize = () => {
    window.scrollY >= 80 ? changeNavBar(true) : changeNavBar(false);
  };

  window.addEventListener('scroll', NavBarResize);

  return (
    <Container navbarresize={navBar ? 'true' : null} hamburger={hamburgerOpen ? 'true' : null}>
      <LogoContainer navbarresize={navBar ? 'true' : null}>
        <LogoIcon src={Logo} />
      </LogoContainer>

      {hamburgerOpen && (
        <>
          <AppContext.Provider value={[hamburgerOpen, changeHamburgerOpen]}>
            <HamburgerWrapper />
          </AppContext.Provider>
        </>
      )}
      <LinkContainer change={navBar ? 'true' : null}>
        <Hamburger
          navbarresize={navBar ? 'true' : null}
          onClick={() => changeHamburgerOpen(true)}
        />
        <LinkChild as={HashLink} smooth to="/#">
          Home
        </LinkChild>
        <LinkChild as={HashLink} smooth to="/#services">
          Services
        </LinkChild>
        <LinkChild as={HashLink} smooth to="/#calculator">
          Calculator
        </LinkChild>
        <LinkChild as={HashLink} smooth to="/#contact">
          Contact
        </LinkChild>
      </LinkContainer>
    </Container>
  );
};

export default Navbar;
