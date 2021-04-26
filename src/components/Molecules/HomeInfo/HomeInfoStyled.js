import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  width: auto;
  height: auto;
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  padding: 30px;
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-align: center;
  margin: 10px;

  @media (max-width: 670px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  ${({ lower }) =>
    lower &&
    css`
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.s};

      @media (max-width: 670px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
    `}
`;
