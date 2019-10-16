import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './index.css';

export const SectionTitle = (props) => {
  const { className, value } = props;
  const titleClassname = classNames('sectionTitle', className);

  return (
    <div className={titleClassname}>{value}</div>
  )
}

SectionTitle.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
}

SectionTitle.defaultProps = {
  className: '',
  value: '',
}