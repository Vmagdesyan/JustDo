import * as React from 'react';

import { Link, Input, Button, Preloader, Title } from '../common';
import { PolicyBlock } from '../PolicyBlock';

import './index.css';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isWaiting: false,
    }
  }

  onSignIn = () => {
    this.onChangeIsWaiting(true);
    setTimeout(() => this.onChangeIsWaiting(false), 3000)
  }

  onChangeIsWaiting = (isWaiting) => this.setState({ isWaiting });

  onChangeEmail = (e) => this.setState({ email: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  render() {
    const { email, password, isWaiting } = this.state;

    return (
      <div className="login">
        <Preloader isWaiting={isWaiting} />
        <Title className="login__title" value="Sign In"/>
        <div className="login__inputBlock">
          <Input placeholder="E-mail" value={email} onChange={this.onChangeEmail} />
          <Input placeholder="Password" value={password} onChange={this.onChangePassword} />
        </div>
        <Link to="/restorePassword">Forgot password?</Link>
        <Button onClick={this.onSignIn}>Sign In</Button>
        <Link to="/registration">Sign Up</Link>
        <PolicyBlock />
      </div>
    );
  }
}