import React from 'react';
import GlobalStyle from '../Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme/MainTheme';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 400, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
});

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainTemplate;
