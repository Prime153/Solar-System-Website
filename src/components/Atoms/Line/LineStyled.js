import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ change }) =>
    change === 'calc' &&
    css`
      min-height: 1vh;
      width: 70%;
    `}
`;
export const Line = styled.hr`
  width: 35%;
  border: 3px solid ${({ theme }) => theme.mainBlue};

  ${({ change }) =>
    change === 'calc' &&
    css`
      width: 40%;
      border: 2px solid ${({ theme }) => theme.mainBlue};
    `}
`;
