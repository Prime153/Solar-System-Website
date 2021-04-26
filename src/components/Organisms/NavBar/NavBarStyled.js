import styled, { css } from 'styled-components';
import { GiHamburgerMenu as HamburgerLogo } from 'react-icons/gi';
import Link from '../../Atoms/Link/Link';

export const Container = styled.div`
  position: absolute;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
  transition: 0.3s;

  ${({ navbarresize, hamburger }) =>
    navbarresize &&
    !hamburger &&
    css`
      justify-content: space-evenly;
      z-index: 999;
      height: 7vh;
      position: fixed;
      font-size: ${({ theme }) => theme.fontSize.m};
      background-color: black;
    `}
  ${({ hamburger }) =>
    hamburger &&
    css`
      height: 50vh;
    `}
`;

export const LogoContainer = styled.div`
  flex-basis: 30%;

  ${({ navbarresize }) =>
    navbarresize &&
    css`
      display: none;
    `}
`;

export const LogoIcon = styled.img`
  margin: 20px 0 0 10px;
  width: 180px;

  @media (max-height: 770px) {
    margin-top: 40px;
  }
  @media (max-height: 560px) {
    margin-top: 60px;
  }
`;

export const LinkContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1090px) {
    flex-basis: 70%;
  }

  ${({ navbarresize }) =>
    navbarresize &&
    css`
      justify-content: center;
      flex-basis: 100%;
    `}
`;

export const LinkChild = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.mainBlue};
    transform: scale(1.04);
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Hamburger = styled(HamburgerLogo)`
  display: none;
  margin: 10px 20px 0 0;
  position: relative;
  right: -35%;

  ${({ navbarresize }) =>
    navbarresize &&
    css`
      margin: 0;
      right: 0;
    `}

  @media(max-width:750px) {
    display: block;
  }
`;
