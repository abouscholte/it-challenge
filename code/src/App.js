import React, { useEffect, useRef } from 'react';
import Header from './modules/Header';
import Code from './modules/Code';
import About from './modules/About';
import Footer from './modules/Footer';

export default function App() {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const html = document.getElementById('html');
    html.classList.add('theme');

    if (isDarkMode) {
      html.classList.remove('theme--light');
      html.classList.add('theme--dark');
    } else {
      html.classList.remove('theme--dark');
      html.classList.add('theme--light');
    }
  }, []);
  
  return (
    <>
      <Header ref={scrollRef} />
      <Code />
      <About ref={scrollRef} />
      <Footer />
    </>
  );
}