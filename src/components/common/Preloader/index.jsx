import * as React from 'react';
import * as PropTypes from 'prop-types';

import spinner from '../../../img/spinner.svg'

import './index.css';

export const Preloader = (props) => {
  const { isWaiting } = props;

  if (!isWaiting) {
    return null;
  }

  return (
    <div className="spinner">
      <img src={spinner} alt="Spinner" className="spinner__image"/>
    </div>
  )
}

Preloader.propTypes = {
  isWaiting: PropTypes.bool.isRequired,
}

Preloader.defaultProps = {
  isWaiting: false,
}