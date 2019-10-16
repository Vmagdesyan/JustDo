import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './index.css';

export const Title = (props) => {
  const { value, className } = props;
  const titleClassname = classNames('title', className);

  return (
    <div className={titleClassname}>{value}</div>
  );
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Title.defaultProps = {
  value: '',
  className: '',
}