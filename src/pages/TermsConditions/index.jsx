import * as React from 'react';

import { LogoBlock } from '../../components/LogoBlock';
import { TermsConditionsForm } from '../../components/TermsConditionsForm';

import './index.css';

export class TermsConditions extends React.Component {
  render() {
    return (
      <div className="termsConditions">
        <LogoBlock />
        <TermsConditionsForm />
      </div>
    );
  }
}