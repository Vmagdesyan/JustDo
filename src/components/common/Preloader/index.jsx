import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './index.css';

export const Preloader = (props) => {
  const { isWaiting } = props;

  if (!isWaiting) {
    return null;
  }

  return (
    <div className='spinner'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='180' height='180'
        viewBox='-40 -40 180 180'
      >
        <g transform='rotate(0 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_1')} r='17.5' />
        </g>
        <g transform='rotate(40 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_2')} r='17.5' />
        </g>
        <g transform='rotate(80 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_3')} r='17.5' />
        </g>
        <g transform='rotate(120 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_4')} r='17.5' />
        </g>
        <g transform='rotate(160 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_5')} r='17.5' />
        </g>
        <g transform='rotate(200 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_6')} r='17.5' />
        </g>
        <g transform='rotate(240 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_7')} r='17.5' />
        </g>
        <g transform='rotate(280 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_8')} r='17.5' />
        </g>
        <g transform='rotate(320 45 45) translate(90 90)'>
          <circle className={classNames('spinner__circle', 'spinner__circle_9')} r='17.5' />
        </g>
      </svg>
    </div>
  );
}

Preloader.propTypes = {
  isWaiting: PropTypes.bool.isRequired,
}

Preloader.defaultProps = {
  isWaiting: false,
}