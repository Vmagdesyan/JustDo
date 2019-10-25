import * as React from 'react'
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './index.css';

export const Button = (props) => {
  const { className, onClick, children } = props;
  const buttonClassname = classNames('button', className);

  return (
    <button onClick={onClick} className={buttonClassname}>{children}</button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  className: '',
  children: '',
  oClick: () => null,
}