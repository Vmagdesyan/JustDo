import * as React from 'react';

import { BackButton, Title, Input, Button } from '../common';

export const InputEmailForm = (props) => {
  const { goBack, email, onChangeEmail, onSendEmail } = props;
  
  return (
    <div className='inputEmailForm'>
      <BackButton onClick={goBack} className='inputEmailForm__goBackButton' />
      <div className='inputEmailForm__inputForm'>
        <Title value='Forgot Password' className='inputNewPasswordForm__title' />
        <div className='inputEmailForm__emailHintBlock'>
          Please enter your email below to receive your password reset instruction
        </div>
        <Input
          placeholder='E-mail'
          value={email}
          onChange={onChangeEmail}
          className='inputEmailForm__inputEmail'
        />
        <Button className='inputEmailForm__sendButton' onClick={onSendEmail}>Send</Button>
      </div>
    </div>
  );
}