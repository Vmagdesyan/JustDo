import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './index.css';

export const Input = (props) => {
  const { value, placeholder, onChange, className } = props;
  const onChangeValue = (e) => onChange(e && e.target && e.target.value);
  const inputClassname = classNames('input', className);

  return (
    <input
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder}
      className={inputClassname}
    />
  )
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => null,
  className: '',
}