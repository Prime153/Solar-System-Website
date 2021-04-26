import styled from 'styled-components';
import ContactBack from '../../assets/ContactBack.webp';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: url(${ContactBack});
  background-position: center;
  background-repeat: no-repeat;
`;
