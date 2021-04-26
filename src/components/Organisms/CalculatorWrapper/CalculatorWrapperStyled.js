import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80%;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  display: grid;
  grid-template-rows: 0.7fr 0.5fr 0.1fr 2fr 0.1fr 0.5fr;
  text-align: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const InOutTextContainer = styled.div`
  padding: 20px 0;
`;

export const InputValue = styled.input`
  -webkit-outer-spin-button,
  -webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  text-align: center;
  width: 15%;
  border: none;
  margin: 0 10px;
  border-bottom: 3px solid ${({ theme }) => theme.mainBlue};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  :focus {
    outline: none;
  }
`;
