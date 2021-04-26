import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
`;
export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.footer.first};
  display: flex;
  padding: 10px;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

  ${({ middle }) =>
    middle &&
    css`
      background-color: ${({ theme }) => theme.footer.second};
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      justify-content: space-around;
      background-color: ${({ theme }) => theme.footer.third};
    `}
`;

export const FooterHeading = styled.h2`
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.mainBlue};

  @media (max-width: 706px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.xs};
  flex-basis: 25%;
  color: white;
  padding: 10px 0;

  @media (max-width: 706px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  @media (max-width: 470px) {
    font-size: 11px;
  }

  ${({ middle }) =>
    middle &&
    css`
      padding: 0;
      flex-basis: auto;
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      padding: 0;
      flex-basis: auto;
      color: ${({ theme }) => theme.darkGrey};
    `}
`;
