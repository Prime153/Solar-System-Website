import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 370px;
  height: 640px;
  display: grid;
  grid-template-rows: 0.2fr 1.5fr 1fr;
  margin: 10px 20px;

  ${({ widther }) =>
    widther === '2' &&
    css`
      width: 540px;
    `}

  @media (max-width: 614px) {
    width: 370px;
  }
  @media (max-width: 410px) {
    margin: 30px;
  }
`;

export const HeadingContainer = styled.div`
  justify-self: center;
  padding: 25px 0;
`;

export const PictureContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  text-align: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  background-color: ${({ theme }) => theme.mainBlue};
  overflow: hidden;

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
