import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a className={styles.logo} href="/">Babacar Ba</a>
          <button className={styles.menuToggle} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={styles.navList}>
            <li><a href="#skills">COMPÉTENCES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">À PROPOS</a></li>
            <li><a href="#cv">CURRICULUM VITAE</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;