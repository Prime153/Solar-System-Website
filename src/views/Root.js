import React from 'react';
import MainTemplate from '../Templates/MainTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

const Root = () => (
  <Router>
    <MainTemplate>
      <Home />
    </MainTemplate>
  </Router>
);

export default Root;
