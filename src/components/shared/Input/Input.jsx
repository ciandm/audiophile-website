import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = React.forwardRef(
  ({ name, label, type, placeholder, error, ...restProps }, ref) => (
    <div className={styles.inputContainer}>
      <div className={styles.inputHeader}>
        <label
          htmlFor={name}
          className={`${styles.label} ${error ? `${styles.error}` : ''}`}
        >
          {label}
        </label>
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
      <input
        name={name}
        type={type || 'text'}
        id={name}
        className={`${styles.input} ${error ? `${styles.error}` : ''}`}
        placeholder={placeholder}
        ref={ref}
        {...restProps}
      />
    </div>
  )
);

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
