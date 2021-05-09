import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from './Nav.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const NavMobile = ({ activePath }) => (
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

const NavDesktop = ({ activePath }) => (
  <nav className={styles.nav}>
    <div className={styles.contents}>
      <div className={styles.logo}>
        <ResponsiveImage
          src="/assets/shared/desktop/logo.svg"
          alt="Audiophile logo"
        />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a
              className={`${styles.link} ${
                activePath === '/' ? `${styles.active}` : ''
              }`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/category/headphones">
            <a
              className={`${styles.link} ${
                activePath === '/category/headphones' ? `${styles.active}` : ''
              }`}
            >
              Headphones
            </a>
          </Link>
        </li>
        <li>
          <Link href="/category/speakers">
            <a
              className={`${styles.link} ${
                activePath === '/category/speakers' ? `${styles.active}` : ''
              }`}
            >
              Speakers
            </a>
          </Link>
        </li>
        <li>
          <Link href="/category/earphones">
            <a
              className={`${styles.link} ${
                activePath === '/category/earphones' ? `${styles.active}` : ''
              }`}
            >
              Earphones
            </a>
          </Link>
        </li>
      </ul>
      <button className={`${styles.nav_button} ${styles.cart}`} type="button">
        &nbsp;
      </button>
    </div>
  </nav>
);

function Nav() {
  const windowSize = useWindowSize();
  const router = useRouter();
  const activePath = router.asPath;
  return windowSize < 1110 ? (
    <NavMobile activePath={activePath} />
  ) : (
    <NavDesktop activePath={activePath} />
  );
}

export default Nav;
