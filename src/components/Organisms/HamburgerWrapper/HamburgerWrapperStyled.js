import styled from 'styled-components';

export const Container = styled.div`
  z-index: 999;
  height: 60vh;
  width: 100%;
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  border-radius: 20px;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
