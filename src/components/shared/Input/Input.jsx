import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

function Input({ name, label, placeholder, error }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputHeader}>
        <label
          htmlFor={name}
          className={`${styles.label} ${error ? `${styles.error}` : ''}`}
        >
          {label}
        </label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
      <input
        type="text"
        className={`${styles.input} ${error ? `${styles.error}` : ''}`}
        onChange={e => setInputValue(e.target.value)}
        placeholder={placeholder}
        value={inputValue}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
