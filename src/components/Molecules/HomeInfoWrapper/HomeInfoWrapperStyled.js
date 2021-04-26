import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 750px;
  height: 800px;
  display: grid;
  text-align: center;
  grid-template-rows: 0.7fr 0.7fr 0.7fr;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  padding: 30px;
  margin: 25px;
  background-color: white;

  @media (max-width: 880px) {
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    width: 450px;
    height: 600px;
  }
`;

export const InfoTextWrapper = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.darkGrey};
  padding-top: 20px;

  @media (max-width: 880px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (max-width: 420px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  ${({ first }) =>
    first &&
    css`
      font-weight: 400;
    `};

  ${({ second }) =>
    second &&
    css`
      font-weight: 700;
      color: black;
    `}
  ${({ third }) =>
    third &&
    css`
      font-weight: 300;
    `}
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: black;
  font-weight: 300;
  text-decoration: underline;
  transition: 0.2s;

  :hover {
    transform: scale(1.07);
  }

  @media (max-width: 880px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (max-width: 420px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
