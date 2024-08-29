import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Comparateur et Simulateur de Services Financiers",
      description: "Développement full stack d'un comparateur et simulateur de services financiers pour OQSF.",
      technologies: "React JS, Node.js, Render, Clever Cloud",
      duration: "3 mois",
      image: "/images/oqsf2.png"  // Add your image path here
    },
    {
      title: "Site Web pour Entreprise Agricole et Solaire",
      description: "Création d'un site internet pour une entreprise spécialisée dans les produits agricoles et solaires.",
      technologies: "React.js",
      image: "/images/sogepi.png"
    },
    {
      title: "E-commerce de Vêtements d'Enfants",
      description: "Développement d'un site e-commerce valorisant la culture à travers des habits d'enfants.",
      technologies: "React.js, Tailwind CSS, Node.js",
      image: "/images/fatouboundaw.png"
    },
    {
      title: "Site d'Entreprise Technologique",
      description: "Projet en cours : Site web pour une entreprise dans le domaine de la technologie.",
      technologies: "React.js",
      image: "/images/africonline.png"
    },
    {
      title: "Kit Serverless Starter",
      description: "Développement d'un kit starter serverless complet.",
      technologies: "Node.js, Express, Neon, Vercel, Next.js, React.js",
      image: "/images/kit.png"
    },
    {
      title: "Plateforme de Télémédecine",
      description: "En cours : Plateforme complète avec vidéoconférence, messagerie en temps réel, téléversement de documents et gestion des rendez-vous.",
      technologies: "React.js, Node.js, WebRTC, Socket.io",
      image: "/images/telemedecine.png"
    },
    {
      title: "Chatbot de Prise de Rendez-vous",
      description: "Développement d'un chatbot intelligent pour la prise de rendez-vous.",
      technologies: "Rasa AI",
      image: "/images/rasa.png"
    }
  ];

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.portfolioHeader}>
        <h2>PORTFOLIO</h2>
        <h5>Une collection de projets sur lesquels j'ai travaillé.</h5>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={styles.projectCard}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={() => setSelectedProject(null)}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <p>Technologies : {selectedProject.technologies}</p>
            {selectedProject.duration && <p>Durée : {selectedProject.duration}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

