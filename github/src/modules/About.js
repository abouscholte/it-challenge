import React from 'react';
import styles from '../styles/content.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.content}>
      <h1 className={styles.title}>Wat is GitHub?</h1>
      <p className={`${styles.infoline} ${styles.no_margin}`}>GitHub is een plek voor programmeurs om hun code te delen en onderhouden. GitHub is gebaseerd op Git, een <i>version control</i> systeem. Hierdoor zou je altijd terug kunnen naar een eerdere versie van je code als er bijvoorbeeld een fout is gemaakt.</p>
    </section>
  );
}