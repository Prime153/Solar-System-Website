import styled from 'styled-components';

export const Textarea = styled.textarea`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.veryLightGrey};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.veryLightGrey};
  }
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 20px 10px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.borderFormInput};
  width: 100%;
  height: 260px;

  @media (max-height: 658px) {
    height: 190px;
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const Input = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.veryLightGrey};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.veryLightGrey};
  }

  border: 1px solid ${({ theme }) => theme.borderFormInput};
  padding: 10px;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  width: ${({ width }) => width};
  height: 94%;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
