import styled from 'styled-components';
import Ocean from '../../assets/Ocean.svg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const OceanContainer = styled(Container)`
  background-image: url(${Ocean});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10%;
  padding-top: 10%;

  @media (max-width: 1379px) {
    justify-content: center;
    padding: 0;
  }
`;
