import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxxl};

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (max-width: 470px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Word = styled.div`
  color: white;
  padding-right: 10px;
  padding-left: 50px;
  background-color: ${({ theme }) => theme.mainBlue};

  ${({ second }) =>
    second &&
    css`
      color: black;
      padding-left: 10px;
      background-color: transparent;
    `}

  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;
