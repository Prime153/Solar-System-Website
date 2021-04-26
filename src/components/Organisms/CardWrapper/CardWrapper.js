import React from 'react';
import Card from '../../Molecules/Card/Card';
import CardPhoto1 from '../../../assets/CardPhoto1.svg';
import CardPhoto2 from '../../../assets/CardPhoto2.svg';
import CardPhoto3 from '../../../assets/CardPhoto3.svg';
import { Container } from './CardWrapperStyled';

const CardWrapper = () => {
  const CardArray = [
    {
      id: '1',
      headingText: 'Safe',
      headingText2: 'energy',
      picture: CardPhoto1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: '2',
      headingText: 'Safe',
      headingText2: 'environment',
      picture: CardPhoto2,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: '3',
      headingText: 'Safe',
      headingText2: 'money',
      picture: CardPhoto3,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
  return (
    <Container>
      {CardArray.map((elem) => (
        <Card
          key={elem.id}
          id={elem.id}
          headingText={elem.headingText}
          headingText2={elem.headingText2}
          photo={elem.picture}
          content={elem.content}
        />
      ))}
    </Container>
  );
};

export default CardWrapper;
