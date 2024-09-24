import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Code, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './CV.module.css';

const TimelineItem = ({ title, date, children, isOpen, toggle }) => (
  <div className={`${styles.timelineItem} ${isOpen ? styles.open : ''}`}>
    <div className={styles.timelineHeader} onClick={toggle}>
      <h4 className={styles.timelineTitle}>{title}</h4>
      <p className={styles.timelineDate}>{date}</p>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>
    {isOpen && <div className={styles.timelineContent}>{children}</div>}
  </div>
);

const CV = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={styles.cvSection} id="cv">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>CURRICULUM VITAE</h2>
        <h5 className={styles.sectionSubtitle}>Mon parcours professionnel et académique</h5>

        <div className={styles.cvGrid}>
          <div className={styles.cvCard}>
            <h3 className={styles.cardTitle}><Briefcase className={styles.icon} />Expérience Professionnelle</h3>
            <div className={styles.timeline}>
              <TimelineItem 
                title="Développeur Full Stack" 
                date="2020 - Présent"
                isOpen={openItems['exp1']}
                toggle={() => toggleItem('exp1')}
              >
                <ul>
                  <li>Développé et remanié plus de 10 sites Web pour divers clients</li>
                  <li>Création de sites web professionnels avec React.js</li>
                  <li>Développement d'applications mobiles avec Ionic</li>
                  <li>Projet en cours d'une plateforme de télémédecine avec Node.js, WebRTC, Socket.io</li>
                </ul>
              </TimelineItem>
            </div>
          </div>

          <div className={styles.cvCard}>
            <h3 className={styles.cardTitle}><GraduationCap className={styles.icon} />Formation</h3>
            <div className={styles.timeline}>
              <TimelineItem 
                title="Licence DevOps" 
                date="Ec2lt - 2024"
                isOpen={openItems['edu1']}
                toggle={() => toggleItem('edu1')}
              />
              <TimelineItem 
                title="Certifications IA & Analyste Cybersécurité" 
                date="FORCE_N - 2024"
                isOpen={openItems['edu2']}
                toggle={() => toggleItem('edu2')}
              />
              <TimelineItem 
                title="Cybersécurité & Python" 
                date="Cisco Network Academy - 2023"
                isOpen={openItems['edu3']}
                toggle={() => toggleItem('edu3')}
              />
              <TimelineItem 
                title="Baccalauréat S2" 
                date="Lycée Maba Diakhou Ba - 2021"
                isOpen={openItems['edu4']}
                toggle={() => toggleItem('edu4')}
              />
            </div>
          </div>
        </div>

        <div className={styles.skillsCard}>
          <h3 className={styles.cardTitle}><Code className={styles.icon} />Compétences Techniques</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h5 className={styles.skillTitle}>Développement Full Stack</h5>
              <ul className={styles.skillList}>
                <li>JavaScript, React.js, Node.js</li>
                <li>TypeScript, Next.js, Express</li>
                <li>Symfony, PHP</li>
                <li>HTML, CSS, Tailwind CSS</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h5 className={styles.skillTitle}>Cybersécurité</h5>
              <ul className={styles.skillList}>
                <li>Ethical Hacking</li>
                <li>Tests d'intrusion</li>
                <li>Analyse de vulnérabilités</li>
                <li>Social engineering</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h5 className={styles.skillTitle}>DevOps & Outils</h5>
              <ul className={styles.skillList}>
                <li>Git, Docker</li>
                <li>AWS, Clever Cloud</li>
                <li>WebRTC, Socket.io</li>
                <li>ORM (Sequelize, Prisma)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.downloadCV}>
        <a href="/cvofbabs_v2.pdf?v=2" className={styles.downloadButton} download>
  <Download className={styles.icon} />
  Télécharger mon CV complet
</a>

        </div>
      </div>
    </section>
  );
};

export default CV;