import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <Router>
      <Redirect from="*" to="/" />
      <Route path="/" exact component={HomePage} />
    </Router>
  )
}

export default Routes;