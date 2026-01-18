import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, imageSrc, link, theme = 'light' }) => {
    return (
        <div className={`${styles.card} ${styles[theme]}`}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                {/* Simple icon or shape in top right if needed */}
                <div className={styles.topIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <p className={styles.description}>{description}</p>

            <div className={styles.footer}>
                {/* Using image as a decorative element or larger icon */}
                {imageSrc && (
                    <div className={styles.cardImage}>
                        {/* Use CSS mask or simple image */}
                        <Image src={imageSrc} width={60} height={60} alt={title} style={{ objectFit: 'contain' }} />
                    </div>
                )}
            </div>

            {/* Speech bubble tail effect for Neuera style */}
            <div className={styles.tail}></div>
        </div>
    );
};

export default ServiceCard;
