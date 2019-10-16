import * as React from 'react';

import { Link } from '../common/Link';

import './index.css';

export const PolicyBlock = (props) => (
  <div className="policy">
    By accessing your account, you agree to our
    <div>
      <Link className="policy__linkToTermsConditions" to='/termsConditions'>Terms conditions</Link>
      and
      <Link className="policy__linkToPrivacyPolicy" to='/privacyPolicy'>Privacy Policy</Link>
    </div>
  </div>
)