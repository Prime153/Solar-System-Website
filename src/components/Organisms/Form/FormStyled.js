import styled from 'styled-components';

export const Container = styled.div`
  width: 610px;
  box-shadow: 0px 0px 21px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
  margin: auto;
  background-color: white;
  text-align: center;

  @media (max-width: 650px) {
    width: 90%;
  }
  @media (max-height: 658px) {
    height: 90%;
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  color: ${({ theme }) => theme.darkGrey};
  font-weight: 500;
  align-self: center;
  text-align: center;
  padding: 10px 0;

  @media (max-width: 546px) {
    font-size: 13px;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 5px;
  grid-template-rows: repeat(1fr, 3);
`;

export const InputsMiddle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ValidationText = styled.div`
  margin-top: -5px;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  color: red;
`;
