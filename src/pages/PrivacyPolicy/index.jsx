import * as React from 'react';

import { LogoBlock } from '../../components/LogoBlock';
import { PrivacyPolicyForm } from '../../components/PrivacyPolicyForm';

import './index.css';

export class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="privacyPolicy">
        <LogoBlock />
        <PrivacyPolicyForm />
      </div>
    );
  }
}