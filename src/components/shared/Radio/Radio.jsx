import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

function Radio({ name, label }) {
  const [checked, setChecked] = useState(false);
  return (
    <label htmlFor={name} className={styles.radioGroup}>
      <input
        type="radio"
        className={styles.radio}
        name={name}
        id={name}
        value={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      <span
        className={`${styles.circle} ${checked ? `${styles.checked}` : ''}`}
      />
      <span className={styles.text}>{label}</span>
    </label>
  );
}

export default Radio;

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
