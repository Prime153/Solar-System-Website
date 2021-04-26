import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
  font-weight: 500;
  text-align: center;
`;

export const UpperText = styled.span`
  color: white;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.title};
  letter-spacing: 2px;

  @media (max-width: 1100px) {
    font-size: 42px;
  }
  @media (max-width: 750px) {
    font-size: 31px;
  }
  @media (max-width: 450px) {
    font-size: 23px;
  }
`;

export const LowerText = styled(UpperText)`
  position: relative;
  left: -2px;
  top: -96px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.underTitle};
  padding-left: -1000px;

  @media (max-width: 1100px) {
    font-size: 170px;
    left: 0.5px;
    top: -74px;
  }
  @media (max-width: 750px) {
    font-size: 130px;
    left: 1px;
    top: -57px;
  }
  @media (max-width: 450px) {
    font-size: 98px;
    top: -42px;
    left: 0;
  }
`;

export const Dot = styled.span`
  color: white;
`;
