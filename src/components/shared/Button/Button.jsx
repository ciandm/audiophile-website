import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Button.module.scss';

const Primary = ({ children, isLink, type, ...restProps }) => {
  if (type === 'link') {
    return (
      <Link {...restProps}>
        <a className={styles.primary}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      {...restProps}
      className={styles.primary}
    >
      {children}
    </button>
  );
};

const Secondary = ({ children, isLink, type, ...restProps }) => {
  if (type === 'link') {
    return (
      <Link {...restProps}>
        <a className={styles.secondary}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      {...restProps}
      className={styles.secondary}
    >
      {children}
    </button>
  );
};

const Ghost = ({ children, isLink, type, ...restProps }) => {
  if (type === 'link') {
    return (
      <Link {...restProps}>
        <a className={styles.primary}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      {...restProps}
      className={styles.primary}
    >
      {children}
    </button>
  );
};

const Button = ({ variation, children, type, ...restProps }) => {
  if (variation === 'secondary') {
    return (
      <Secondary type={type} {...restProps}>
        {children}
      </Secondary>
    );
  }
  if (variation === 'ghost') {
    return (
      <Ghost type={type} {...restProps}>
        {children}
      </Ghost>
    );
  }
  return (
    <Primary type={type} {...restProps}>
      {children}
    </Primary>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']).isRequired,
  variation: PropTypes.oneOf(['primary', 'secondary', 'ghost']).isRequired,
};
