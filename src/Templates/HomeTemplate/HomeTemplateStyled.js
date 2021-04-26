import styled from 'styled-components';
import HomeBack from '../../assets/HomeBack.webp';
import HomeInfoWrapperBack from '../../assets/HomeInfoWrapperBack.webp';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HomeBack});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  min-height: 100vh;
`;

export const InfoContainer2 = styled(InfoContainer)`
  background-color: ${({ theme }) => theme.lightGrey};
  background-image: url(${HomeInfoWrapperBack});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 880px) {
    padding: 0;
    align-items: center;
  }
`;
