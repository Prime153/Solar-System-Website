import styled from 'styled-components';

export const HeadingText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Line = styled.hr`
  border: 2px solid ${({ theme }) => theme.mainBlue};
  color: black;
  margin: 0 24%;
  width: 50%;
`;
