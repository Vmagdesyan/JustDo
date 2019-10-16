import * as React from 'react';

import { Link, Preloader, Button, Input, Title } from '../common';
import { PolicyBlock } from '../PolicyBlock';

import './index.css';

export class RegistrationForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isWaiting: false,
    };
  }

  onSignUp = () => {
    this.onChangeIsWaiting(true);
    setTimeout(() => this.onChangeIsWaiting(false), 3000)
  }

  onChangeIsWaiting = (isWaiting) => this.setState({ isWaiting });

  onChangeEmail = (e) => this.setState({ email: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  onChangeConfirmPassworm = (e) => this.setState({ confirmPassword: e.target.value });

  render() {
    const {
      email,
      password,
      confirmPassword,
      isWaiting,
    } = this.state;

    return (
      <div className="registrationForm">
        <Preloader isWaiting={isWaiting} />
        <Title className="registrationForm__title" value="Sign Up"/>
        <div className="registrationForm__inputBlock">
          <Input placeholder="E-mail" value={email} onChange={this.onChangeEmail} />
          <Input placeholder="Password" value={password} onChange={this.onChangePassword} />
          <Input placeholder="Confirm password" value={confirmPassword} onChange={this.onChangeConfirmPassworm} />
        </div>
        <div>
          <Button onClick={this.onSignUp}>Sign Up</Button>
          <div className="registrationForm__signInBlock">
            <div>I already have an account.</div>
            <Link className="registrationForm__linkToLogin" to='/login'>Sign In</Link>
          </div>
        </div>
        <PolicyBlock/>
      </div>
    );
  }
}