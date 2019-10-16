import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';

import arrowLeft from '../../../img/ic_arrow_left.svg'

import './index.css';

export const BackButton = (props) => {
  const { className, onClick } = props;
  const backButtonClassname = classNames('backButton', className);

  return (
    <img
      src={arrowLeft}
      className={backButtonClassname}
      onClick={onClick}
      alt="Назад"
    />
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

BackButton.defaultProps = {
  oClick: () => null,
  className: '',
}