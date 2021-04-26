import styled from 'styled-components';
import CalcBack from '../../assets/CalcBack.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${CalcBack});
  background-position-y: 30%;
  background-position-x: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 630px) {
    background-position-x: 6%;
  }

  @media (max-width: 536px) {
    background-position-x: 10%;
  }
`;
