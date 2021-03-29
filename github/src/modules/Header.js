import React from 'react';
import styles from '../styles/content.module.scss';
import { LogoGithub } from 'react-ionicons';

export default function Top() {
  return (
    <section id="header" className={styles.content}>
      <h1 className={styles.title}>
        Bekijk de code
        <span className={styles.logo}>
          <LogoGithub color={'#003162'} width={'30px'} height={'30px'} />
        </span>
      </h1>

      <p className={styles.infoline}>
        Alle code van de website voor de IT Challenge voor Notenboom Business School is te vinden op GitHub.
      </p>

      <a className={styles.button} href="https://github.com/abouscholte/it-challenge" target="_blank" rel="noreferrer">
        Breng me naar GitHub
      </a>
      <a className={`${styles.button} ${styles.button_outline}`} href="#about">Wat is GitHub?</a>
    </section>
  );
}