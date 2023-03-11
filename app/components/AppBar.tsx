import Link from 'next/link';
import {
  RiHome4Line,
  RiMailLine,
  RiPagesLine,
  RiInformationLine,
} from 'react-icons/ri';

import styles from '../styles/appbar.module.css';

export const AppBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href='/'>
              <RiHome4Line className={styles.navIcon} />
              <small className={styles.navText}>Home</small>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href='/about'>
              <RiInformationLine className={styles.navIcon} />
              <small className={styles.navText}>About</small>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href='/posts'>
              <RiPagesLine className={styles.navIcon} />
              <small className={styles.navText}>Posts</small>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href='/contact'>
              <RiMailLine className={styles.navIcon} />
              <small className={styles.navText}>Contact</small>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
