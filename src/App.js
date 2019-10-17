import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { TermsConditions } from './pages/TermsConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/registration' component={Registration} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/termsConditions' component={TermsConditions} />
      <Route exact path='/privacyPolicy' component={PrivacyPolicy} />
    </Switch>
  );
}

export default App;
