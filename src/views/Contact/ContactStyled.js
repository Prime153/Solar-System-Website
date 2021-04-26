import styled from 'styled-components';
import ContactBack from '../../assets/ContactBack.svg';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: url(${ContactBack});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
