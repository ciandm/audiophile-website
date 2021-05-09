import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from './Nav.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const NavMobile = () => (
  <nav className={styles.nav}>
    <div className={styles.contents}>
      <button className={`${styles.nav_button} ${styles.menu}`} type="button">
        &nbsp;
      </button>
      <div className={styles.logo}>
        <ResponsiveImage
          src="/assets/shared/desktop/logo.svg"
          alt="Audiophile logo"
        />
      </div>
      <button className={`${styles.nav_button} ${styles.cart}`} type="button">
        &nbsp;
      </button>
    </div>
  </nav>
);

function Nav() {
  const windowSize = useWindowSize();
  return windowSize < 500 ? <NavMobile /> : <h2>Desktop</h2>;
}

export default Nav;
