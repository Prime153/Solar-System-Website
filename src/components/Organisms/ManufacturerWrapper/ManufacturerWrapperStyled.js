import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 400;
`;

export const Text = styled.div`
  margin-top: 30px;
  flex-basis: 33%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
  transition: 0.2s;

  :hover {
    transform: scale(1.03);
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 624px) {
    flex-basis: 100%;
  }

  @media (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const LowerText = styled.p`
  position: relative;
  color: ${({ theme }) => theme.mainBlue};
  top: -30px;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    top: -20px;
  }

  @media (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
