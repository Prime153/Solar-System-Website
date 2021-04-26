import styled from 'styled-components';

export const StyleButton = styled.button`
  width: 170px;
  height: 63px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 50px;
  border: none;
  transition: 0.5s;
  cursor: pointer;
  margin: 10px 0;

  :focus {
    outline: none;
  }

  @media (max-width: 610px) {
    width: 180px;
    height: 45px;
  }
  @media (max-width: 400px) {
    width: 150px;
  }
`;

export const InnerText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.Oswald};
  font-weight: 600;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;

  ::after {
    content: '»';
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.3s;
  }

  :hover {
    padding-right: 30px;
    padding-left: 15px;
  }

  :hover:after {
    opacity: 1;
    right: 10px;
  }

  @media (max-width: 610px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
