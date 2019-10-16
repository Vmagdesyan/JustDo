import * as React from 'react';

import { LogoBlock } from '../../components/LogoBlock';
import { LoginForm } from '../../components/LoginForm';

import './index.css';

export class Login extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <LogoBlock />
        <LoginForm />
      </div>
    );
  }
}