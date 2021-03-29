import React, { useEffect } from 'react';
import Header from './modules/Header';
import About from './modules/About';
import Footer from './modules/Footer';

export default function App() {
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
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}