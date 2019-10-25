import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';

import arrowLeft from '../../../img/ic_arrow_left.svg'

import './index.css';

export const BackButton = (props) => {
  const { className, onClick } = props;
  const backButtonClassname = classNames('backButton', className);

  return (
    <button className={backButtonClassname} onClick={onClick}>
      <img
        src={arrowLeft}
        alt='Назад'
      />
    </button>
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