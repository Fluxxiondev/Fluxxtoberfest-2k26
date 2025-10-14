import React from 'react';
import styles from './mentors.module.css';

const mentorsData = [
  {
    id: 1,
    name: 'Ayesha Arshad',
    role: 'Staff Engineer & Accessibility Advocate',
    image: '/profile-one.jpg', 
    github: 'ayesha-arsd', 
    linkedin: '#', 
  },
  {
    id: 2,
    name: 'Husnain',
    role: 'Data Scientist & Visualization Expert',
    image: '/profile-two.jpg',
    github: '#',
  },
  {
    id: 3,
    name: 'Muslim Khan',
    role: 'Lead UX Designer, AI Prototyping',
    image: '/profilee.jpg',
    linkedin: 'sara-ux-design',
  },
  {
    id: 4,
    name: 'Neha Noor',
    role: 'Senior Frontend Architect (React/Three.js)',
    image: '/profile-three.jpg',
    github: '#',
  },
  {
    id: 5,
    name: 'Abid Ali',
    role: 'DevOps & SEO Specialist',
    image: '/profilee.jpg',
    linkedin: 'abid-ali-b89794334/',
    github: 'Abidd1',
  },
];

// icons section are starting from here
const GitHubIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.001 0 2.043.14 3.003.399 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.792 24 17.29 24 12 24 5.373 18.627 0 12 0z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.535-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.671 7 3.141v6.094z"/>
    </svg>
);

// making a logic for components here
const Mentors = () => {

  
  const getPrimaryLink = (mentor) => {
    if (mentor.linkedin) {
      return `https://linkedin.com/in/${mentor.linkedin}`;
    }
    if (mentor.github) {
      return `https://github.com/${mentor.github}`;
    }
    return '#'; 
  };

  return (
    <section className={styles.mentorsSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}> PAST MENTORS: </span> FluxxtoberFest 2024
        </h2>
        <p className={styles.sectionSubtitle}>
          Archived brilliance. These experts shaped the future of last year's event.
        </p>

        {}
        <div className={styles.mentorSlider}>
          {mentorsData.map((mentor) => (
            <a
              key={mentor.id}
              
              href={getPrimaryLink(mentor)}
              className={styles.mentorCard}
              role="figure"
              aria-label={`Mentor profile for ${mentor.name}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={mentor.image || '/images/default-avatar.jpg'}
                  alt={`Profile of ${mentor.name}`}
                  
                  className={styles.profileImage} 
                />
              </div>
             
              <div className={styles.info}>
                <h3 className={styles.mentorName}>{mentor.name}</h3>
                <p className={styles.mentorRole}>{mentor.role}</p>
              </div>

              {}
              <div className={styles.socialLinks}>
                {mentor.github && (
                  <a 
                    href={`https://github.com/${mentor.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`GitHub profile of ${mentor.name}`}
                    
                    className={styles.socialLink}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {mentor.linkedin && (
                  <a 
                    href={`https://linkedin.com/in/${mentor.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`LinkedIn profile of ${mentor.name}`}
                    className={styles.socialLink}
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;