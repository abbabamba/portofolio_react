import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Brain, Music, Dumbbell } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>À Propos</motion.h2>
        <motion.div className={styles.aboutContent} variants={itemVariants}>
          <p>
            Passionné par les nouvelles technologies, je suis un développeur Full Stack 
            polyvalent et créatif, avec une expertise certifiée en analyse de cybersécurité.
          </p>
          <p>
            Doté d'un esprit analytique et de solides compétences techniques, je suis 
            constamment à l'affût des dernières avancées pour concevoir des solutions 
            innovantes. Ma curiosité insatiable me pousse à relever des défis stimulants.
          </p>
          <p>
            Je suis également un excellent communicateur et un joueur d'équipe apprécié, 
            capable de m'adapter rapidement à de nouveaux environnements et technologies.
          </p>
        </motion.div>
        <motion.div className={styles.skills} variants={itemVariants}>
          <div className={styles.skillItem}>
            <Code size={32} />
            <span>Développement Full Stack</span>
          </div>
          <div className={styles.skillItem}>
            <Shield size={32} />
            <span>Cybersécurité</span>
          </div>
          <div className={styles.skillItem}>
            <Brain size={32} />
            <span>IA & Machine Learning</span>
          </div>
        </motion.div>
        <motion.div className={styles.interests} variants={itemVariants}>
          <h3>Centres d'intérêt</h3>
          <ul>
            <li><Brain size={24} /> Exploration de nouvelles technologies IA</li>
            <li><Music size={24} /> Khassida</li>
            <li><Dumbbell size={24} /> Sports</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;