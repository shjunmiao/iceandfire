import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Redirect from="*" to="/" />
          <Route path="/" exact component={HomePage} />
        </div>
      </Router>
    </div>
  )
}

export default Routes;