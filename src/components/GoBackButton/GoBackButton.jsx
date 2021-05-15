import React from 'react';
import { useRouter } from 'next/router';
import styles from './GoBackButton.module.scss';

function GoBackButton() {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
