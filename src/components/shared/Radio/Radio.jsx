import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

function Radio({ activeRadio, handleRadioSelect, name, label }) {
  const [checked, setChecked] = useState(false);
  return (
    <button
      type="button"
      className={styles.radioGroup}
      onClick={() => setChecked(prev => !prev)}
    >
      <input
        type="radio"
        className={styles.radio}
        name={name}
        value={checked}
        onChange={e => setChecked(e.target.value)}
      />
      <span
        className={`${styles.circle} ${checked ? `${styles.checked}` : ''}`}
      />
      <span className={styles.text}>{label}</span>
    </button>
  );
}

export default Radio;

Radio.propTypes = {
  activeRadio: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
