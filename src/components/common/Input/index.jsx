import * as React from 'react';
import * as PropTypes from 'prop-types';

import './index.css';

export const Input = (props) => (
  <input
    {...props}
    className="input"
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => null,
}