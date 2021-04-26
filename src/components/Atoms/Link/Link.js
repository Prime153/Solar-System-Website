import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyle } from './LinkStyled';

const Link = ({ name, title, path }) => (
  <LinkStyle name={name} smooth to={path}>
    {title}
  </LinkStyle>
);

Link.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string,
};

export default Link;
