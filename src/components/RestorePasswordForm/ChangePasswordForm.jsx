import * as React from 'react';

import { BackButton, Title, Input, Button } from '../common';

import './index.css';

export class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      password: '',
      confirmPassword: '',
    };
  }

  onChangeCode = (code) => this.setState({ code });
  
  onChangePassword = (password) => this.setState({ password });

  onChangeConfirmPassword = (confirmPassword) => this.setState({ confirmPassword });

  render() {
    const { goBack, changePassword } = this.props;
    const { code, confirmPassword, password } = this.state;

    return (
      <div className='inputNewPasswordForm'>
        <BackButton onClick={goBack} className='inputNewPasswordForm__goBackButton' />
        <div className='inputNewPasswordForm__inputForm'>
          <Title value='Forgot Password' className='inputNewPasswordForm__title' />
          <div className='inputNewPasswordForm__passwordHintBlock'>
            Reset code was sent to your Email. Please enter the code and create new password
        </div>
          <div className='inputNewPasswordForm__inputsBlock'>
          <Input
            placeholder='Code'
            value={code}
            onChange={this.onChangeCode}
            className='inputNewPasswordForm__inputCode'
          />
          <Input
            placeholder='Password'
            value={password}
            onChange={this.onChangePassword}
            className='inputNewPasswordForm__inputPassword'
          />
          <Input
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={this.onChangeConfirmPassword}
            className='inputNewPasswordForm__inputConfirmPassword'
          />
        </div>
        <Button
          className='inputNewPasswordForm__changePasswordButton'
          onClick={changePassword}
        >
          Change Password
        </Button>
        </div>
      </div>
    );
  }
}
  