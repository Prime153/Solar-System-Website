import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: grid;
  justify-items: start;
  font-weight: 500;
  margin: 15px;

  @media (max-width: 1299px) {
    justify-items: center;
    text-align: center;
    width: 80%;
  }

  ${({ change }) =>
    change === 'second' &&
    css`
      text-align: right;
      justify-items: end;
    `}

  ${({ change }) =>
    change === 'ocean' &&
    css`
      color: white;
    `}
`;

export const Text = styled.div`
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.darkGrey};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (max-width: 406px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  ${({ change }) =>
    change === 'ocean' &&
    css`
      color: white;
    `}
`;
