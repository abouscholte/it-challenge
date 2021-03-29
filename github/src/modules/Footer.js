import React from 'react';
import styles from '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.text}>&copy; Copyright 2020 - 2021</p>
    </footer>
  );
}