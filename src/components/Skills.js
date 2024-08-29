import React from 'react';
import { Code, Server, Shield, Database } from 'lucide-react';
import styles from './Skills.module.css';

const SkillCard = ({ icon: Icon, title, description }) => (
  <div className={styles.skillCard}>
    <div className={styles.iconWrapper}>
      <Icon size={32} />
    </div>
    <h3 className={styles.skillTitle}>{title}</h3>
    <p className={styles.skillDescription}>{description}</p>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "Maîtrise des langages et frameworks modernes : JavaScript, Python, PHP, React.js, Next.js, Node.js, Express, Symfony. Expérience en TypeScript, WebRTC, et Socket.io pour des applications web dynamiques et en temps réel."
    },
    {
      icon: Database,
      title: "Gestion de Bases de Données",
      description: "Expertise en ORM avec Sequelize et Prisma. Compétences avancées en MySQL et PostgreSQL. Conception et optimisation de schémas de bases de données pour des performances optimales."
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Certifié en analyse de cybersécurité. Compétences en Ethical Hacking et tests d'intrusion. Expertise en analyse de vulnérabilités (wired, wireless, application-based), social engineering, et exploitation post-intrusion."
    },
    {
      icon: Server,
      title: "DevOps et Cloud",
      description: "Expérience en déploiement et gestion d'applications sur des plateformes cloud. Compétences en intégration continue et déploiement continu (CI/CD). Connaissance des pratiques DevOps pour optimiser le cycle de développement."
    }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>COMPÉTENCES</h2>
        <h5 className={styles.sectionSubtitle}>Expertise en développement Full Stack et cybersécurité</h5>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;