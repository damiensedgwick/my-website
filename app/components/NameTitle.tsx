'use client';

import styles from '@/app/styles/nametitle.module.css';

export const NameTitle = () => {
  return (
    <h1 className={styles.title} onClick={() => alert('Helloooo')}>
      Damien Sedgwick
    </h1>
  );
};
