import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from './Nav.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ProductShopCards from '../../ProductShopLinks/ProductShopCards/ProductShopCards';
import CartModal from '../../CartModal/CartModal';
import { useCartContext } from '../../../context/CartContext';

const NavMobile = ({
  activePath,
  cartOpen,
  cartItems,
  cartItemCount,
  cartTotal,
  handleShowCart,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => () => setMenuOpen(false), []);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`${styles.nav} ${
        activePath === '/' ? `${styles.navHome}` : ''
      }`}
    >
      {menuOpen ? (
        <div
          aria-label="Menu overlay"
          className={styles.overlay}
          onKeyDown={handleKeyDown}
          onClick={handleMenuToggle}
          role="button"
          tabIndex={0}
        />
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
          <div className={styles.cartButton}>
            <button
              className={`${styles.nav_button} ${styles.cart}`}
              type="button"
              onClick={() => handleShowCart('show')}
              aria-label="Toggle cart"
            >
              &nbsp;
            </button>
            <span className={styles.cartCount}>{cartItemCount}</span>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.footer}>
          <ProductShopCards />
        </div>
      ) : null}
      {cartOpen ? (
        <CartModal cartItems={cartItems} cartTotal={cartTotal} />
      ) : null}
    </nav>
  );
};

const NavDesktop = ({
  activePath,
  cartOpen,
  cartItems,
  cartItemCount,
  cartTotal,
  handleShowCart,
}) => (
  <nav
    className={`${styles.nav} ${activePath === '/' ? `${styles.navHome}` : ''}`}
  >
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
      <div className={styles.cartButton}>
        <button
          className={`${styles.nav_button} ${styles.cart}`}
          type="button"
          onClick={() => handleShowCart('show')}
          aria-label="Toggle cart"
        >
          &nbsp;
        </button>
        <span className={styles.cartCount}>{cartItemCount}</span>
      </div>
    </div>
    {cartOpen ? (
      <CartModal cartItems={cartItems} cartTotal={cartTotal} />
    ) : null}
  </nav>
);

function Nav() {
  const windowSize = useWindowSize();
  const router = useRouter();
  const {
    cartItemCount,
    cartOpen,
    cartItems,
    cartTotal,
    handleShowCart,
  } = useCartContext();
  const activePath = router.asPath;
  return windowSize < 1110 ? (
    <NavMobile
      activePath={activePath}
      cartOpen={cartOpen}
      cartItems={cartItems}
      cartItemCount={cartItemCount}
      cartTotal={cartTotal}
      handleShowCart={handleShowCart}
    />
  ) : (
    <NavDesktop
      activePath={activePath}
      cartOpen={cartOpen}
      cartItems={cartItems}
      cartItemCount={cartItemCount}
      cartTotal={cartTotal}
      handleShowCart={handleShowCart}
    />
  );
}

export default Nav;
