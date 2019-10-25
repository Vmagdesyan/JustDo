import * as React from 'react';

import { RestorePasswordForm } from '../../components/RestorePasswordForm';
import { LogoBlock } from '../../components/LogoBlock';

import './index.css';

export class RestorePassword extends React.Component {
  render() {
    return (
      <div className="registration">
        <LogoBlock />
        <RestorePasswordForm />
      </div>
    );
  }
}