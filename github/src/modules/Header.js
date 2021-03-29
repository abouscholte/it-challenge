import React from 'react';
import { LogoGithub } from 'react-ionicons';

export default function Top() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  return (
    <section id="header" className="content">
      <h1 className="title">
        Bekijk de code
        <span className="logo">
          <LogoGithub
            color={isDarkMode ? '#2190ff' : '#003162'}
            height={'30px'}
            width={'30px'}
          />
        </span>
      </h1>

      <p className="infoline">
        Alle code van de website voor de IT Challenge voor Notenboom Business School is te vinden op GitHub.
      </p>

      <a className="button" href="https://github.com/abouscholte/it-challenge" target="_blank" rel="noreferrer">
        Breng me naar GitHub
      </a>
      <a className="button button_outline" href="#about">Wat is GitHub?</a>
    </section>
  );
}