import { HashLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';

export const LinkStyle = styled(HashLink)`
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
  color: white;
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  font-size: ${({ theme }) => theme.fontSize.m};

  :focus {
    outline: none;
  }

  ${({ name }) =>
    name === 'footer' &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: white;
      text-decoration: none;
      transition: 0.3s;
      margin: 0;
    `}

  :hover {
    color: ${({ theme }) => theme.mainBlue};
  }
`;
