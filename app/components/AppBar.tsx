'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiHome4Line,
  // RiMailLine,
  RiPagesLine,
  // RiInformationLine,
} from 'react-icons/ri';

import styles from '../styles/appbar.module.css';

export const AppBar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          <li
            className={pathname === '/' ? styles.navItemActive : styles.navItem}
          >
            <Link className={styles.navLink} href='/'>
              <RiHome4Line className={styles.navIcon} />
              <span className={styles.navText}>Home</span>
            </Link>
          </li>
          {/*<li*/}
          {/*  className={*/}
          {/*    pathname === '/about' ? styles.navItemActive : styles.navItem*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Link className={styles.navLink} href='/about'>*/}
          {/*    <RiInformationLine className={styles.navIcon} />*/}
          {/*    <span className={styles.navText}>About</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li
            className={
              pathname === '/articles' ? styles.navItemActive : styles.navItem
            }
          >
            <Link className={styles.navLink} href='/articles'>
              <RiPagesLine className={styles.navIcon} />
              <span className={styles.navText}>Articles</span>
            </Link>
          </li>
          {/*<li*/}
          {/*  className={*/}
          {/*    pathname === '/contact' ? styles.navItemActive : styles.navItem*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Link className={styles.navLink} href='/contact'>*/}
          {/*    <RiMailLine className={styles.navIcon} />*/}
          {/*    <span className={styles.navText}>Contact</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  );
};
