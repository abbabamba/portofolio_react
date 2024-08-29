import React from 'react';
import { ChevronDown, Code, Shield, Server } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.name}>Babacar Ba</h1>
          <h2 className={styles.title}>
            <span className={styles.titleItem}>
              <Code size={24} /> Développeur Full Stack
            </span>
            <span className={styles.titleItem}>
              <Shield size={24} /> Expert en Cybersécurité
            </span>
            <span className={styles.titleItem}>
              <Server size={24} /> DevSecOps
            </span>
          </h2>
          <p className={styles.description}>
            Passionné par les nouvelles technologies et l'innovation
          </p>
          <a href="#skills" className={styles.cta}>
            Découvrir mes compétences
            <ChevronDown className={styles.ctaIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;