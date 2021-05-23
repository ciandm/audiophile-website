import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const Radio = React.forwardRef(
  ({ activeRadio, name, label, error, ...restProps }, ref) => (
    <label
      type="button"
      className={`${styles.radioGroup} 
      ${activeRadio ? `${styles.active}` : ''} 
      ${error ? `${styles.error}` : ''}`}
    >
      <input
        type="radio"
        className={styles.radio}
        name={name}
        ref={ref}
        {...restProps}
      />
      <span className={styles.circle} />
      <span className={styles.text}>{label}</span>
    </label>
  )
);

export default Radio;

Radio.propTypes = {
  activeRadio: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
