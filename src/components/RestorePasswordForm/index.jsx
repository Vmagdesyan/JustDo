import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { InputEmailForm } from './InputEmailForm';
import { ChangePasswordForm } from './ChangePasswordForm';
import { Preloader } from '../common';

import './index.css';

class _RestorePasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidEmail: false,
      isWaiting: false,
      email: '',
    }
  }

  onChangeIsValidEmail = (isValidEmail) => this.setState({ isValidEmail });

  onChangeEmail = (email) => this.setState({ email });

  onChangeIsWaiting = (isWaiting) => this.setState({ isWaiting });

  onSendEmail = () => {
    this.onChangeIsWaiting(true);
    setTimeout(() => {
      this.onChangeIsWaiting(false);
      this.onChangeIsValidEmail(true);
    }, 3000);
  }

  goBackToEditLogin = () => {
    this.onChangeIsValidEmail(false);
  }

  onChangePassword = () => {
    this.onChangeIsWaiting(true);
    setTimeout(() => {
      this.onChangeIsWaiting(false);
      this.props.history.push('/login');
    }, 3000);
  }

  render() {
    const { history: { goBack } } = this.props;
    const { email, isWaiting, isValidEmail } = this.state;
    const componentForView = isValidEmail
      ? (
        <ChangePasswordForm
          changePassword={this.onChangePassword}
          goBack={this.goBackToEditLogin}
        />
      )
      : (
        <InputEmailForm
          email={email}
          goBack={goBack}
          onChangeEmail={this.onChangeEmail}
          onSendEmail={this.onSendEmail}
        />
      );

    return (
      <div className='restorePasswordForm'>
        <Preloader isWaiting={isWaiting}/>
        {componentForView}
      </div>
    );
  }
}

export const RestorePasswordForm = withRouter(_RestorePasswordForm);