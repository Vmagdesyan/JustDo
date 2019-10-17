import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { BackButton, Title, SectionTitle } from '../common';

import './index.css';

class _PrivacyPolicyForm extends React.Component {
  render() {
    const { history: { goBack } } = this.props;

    return (
      <div className="privacyPolicyForm">
        <div className="privacyPolicyForm__header">
          <BackButton onClick={goBack} />
          <Title value="Privacy Policy" />
        </div>
        <div className="privacyPolicyForm__content">
          My Company (change this) («us», «we», or «our») operates http://www.mysite.com (change this)
          (the «Site»). This page informs you of our policies regarding the collection, use and disclosure
          of Personal Information we receive from users of the Site. We use your Personal Information only
          for providing and improving the Site. By using the Site, you agree to the collection and use of
          information in accordance with this policy.
          <SectionTitle value="Information Collection And Use" />
          While using our Site, we may ask you to provide us with certain personally identifiable information
          that can be used to contact or identify you. Personally identifiable information may include, but
          is not limited to your name («Personal Information»).
          <SectionTitle value="Log Data" />
          Like many site operators, we collect information that your browser sends whenever you
          visit our Site («Log Data»). This Log Data may include information such as your computer’s Internet
          Protocol («IP») address, browser type, browser version, the pages of our Site that you visit,
          the time and date of your visit, the time spent on those pages and other statistics. In addition,
          we may use third party services such as Google Analytics that collect, monitor and analyze this …
          <SectionTitle value="Communications" />
          We may use your Personal Information to contact you with newsletters, marketing or promotional materials
          and other information that …
        </div>
      </div>
    );
  }
}

export const PrivacyPolicyForm = withRouter(_PrivacyPolicyForm);