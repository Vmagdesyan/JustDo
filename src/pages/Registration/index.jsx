import * as React from 'react';

import { RegistrationForm } from '../../components/RegistrationForm';
import { LogoBlock } from '../../components/LogoBlock';

import './index.css';

export class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <LogoBlock/>
        <RegistrationForm/>
      </div>
    );
  }
}