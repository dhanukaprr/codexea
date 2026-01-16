import Link from 'next/link';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ client, category, link, theme = 'dark' }) => {
    return (
        <Link href={link} target="_blank" className={`${styles.projectCard} ${styles[theme]}`}>
            <div className={styles.cardHeader}>
                <span className={styles.category}>{category}</span>
                <div className={styles.arrowIcon}>↗</div>
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
