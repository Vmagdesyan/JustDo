import * as React from 'react';

import LogoImg from '../../img/logo.svg';

import './index.css';

export const LogoBlock = (props) => (
  <div className='logo'>
    <img src={LogoImg} alt='Логотип' />
  </div>
)