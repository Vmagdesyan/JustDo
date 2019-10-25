import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import * as classNames from 'classnames';

import './index.css';

export const Link = (props) => {
  const { children, to, className } = props;
  const linkClassname = classNames('link', className);

  return (
    <RouterLink to={to} className={linkClassname}>{children}</RouterLink>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  children: '',
  to: '',
  className: '',
}