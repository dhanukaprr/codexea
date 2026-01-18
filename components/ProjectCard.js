import Link from 'next/link';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ client, category, link, theme = 'dark' }) => {
    return (
        <Link href={link} target="_blank" className={`${styles.projectCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <span className={styles.category}>{category}</span>
                <div className={styles.arrowIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={styles.cardContent}>
                <h2>{client}</h2>
                <div className={styles.resultBadge}>
                    Visit Site
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
