import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.scss';

function Footer() {
  const router = useRouter();
  const activePath = router.asPath;
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile logo"
            className={styles.logo}
          />
          <ul className={styles.links}>
            <Link href="/">
              <a
                className={`${styles.link} ${
                  activePath === '/' ? `${styles.active}` : ''
                }`}
              >
                Home
              </a>
            </Link>
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
            <Link href="/category/speakers">
              <a
                className={`${styles.link} ${
                  activePath === '/category/speakers' ? `${styles.active}` : ''
                }`}
              >
                Speakers
              </a>
            </Link>
            <Link href="/category/earphones">
              <a
                className={`${styles.link} ${
                  activePath === '/category/earphones' ? `${styles.active}` : ''
                }`}
              >
                Earphones
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.info}>
          <p className={styles.bio}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.copyright}>
            Copyright 2021. All Rights Reserved
          </p>
          <div className={styles.social}>
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook link"
              className={styles.icon}
            />
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter link"
              className={styles.icon}
            />
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram link"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
