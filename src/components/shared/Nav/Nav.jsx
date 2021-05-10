import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from './Nav.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ProductShopCards from '../../ProductShopLinks/ProductShopCards/ProductShopCards';
import CartModal from '../../CartModal/CartModal';

const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);
  useEffect(() => () => setMenuOpen(false), []);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.nav}>
      {menuOpen ? (
        <div className={styles.overlay} onClick={handleMenuToggle} />
      ) : null}
      <div className={styles.header}>
        <div className={styles.contents}>
          <button
            className={`${styles.nav_button} ${styles.menu}`}
            type="button"
            onClick={handleMenuToggle}
          >
            &nbsp;
          </button>
          <div className={styles.logo}>
            <ResponsiveImage
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile logo"
            />
          </div>
          <button
            className={`${styles.nav_button} ${styles.cart}`}
            type="button"
          >
            &nbsp;
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.footer}>
          <ProductShopCards />
        </div>
      ) : null}
      {cartOpen ? <CartModal /> : null}
    </nav>
  );
};

const NavDesktop = ({ activePath }) => {
  const [cartOpen, setCartOpen] = useState(true);
  return (
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
                  activePath === '/category/headphones'
                    ? `${styles.active}`
                    : ''
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
      {cartOpen ? <CartModal /> : null}
    </nav>
  );
};

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
