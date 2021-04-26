import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10% 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.img`
  width: 600px;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 750px) {
    width: 500px;
    box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 550px) {
    width: 300px;
  }

  ${({ change }) =>
    change === 'second' &&
    css`
      order: -1;

      @media (max-width: 1299px) {
        order: 0;
      }
    `}
`;
