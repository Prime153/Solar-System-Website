import React from 'react';
import HeadingTwoFaces from '../../Atoms/HeadingTwoFaces/HeadingTwoFaces';
import PropTypes from 'prop-types';
import { Container, HeadingContainer, PictureContainer, TextContainer } from './CardStyled';

const Card = ({ id, content, photo, headingText, headingText2 }) => (
  <>
    <Container widther={id}>
      <HeadingContainer>
        <HeadingTwoFaces widther={id} firstW={headingText} secondW={headingText2} />
      </HeadingContainer>
      <PictureContainer photo={photo} />
      <TextContainer>{content}</TextContainer>
    </Container>
  </>
);

Card.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  photo: PropTypes.string,
  headingText: PropTypes.string,
  headingText2: PropTypes.string,
};

export default Card;
