import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>

                <div className={styles.mainContent}>
                    <h1 className={styles.headline}>
                        <span className={styles.line}>WE CRAFT</span>
                        <span className={styles.line}>
                            THE DIGITAL
                        </span>
                        <span className={styles.line}>
                            EXPERIENCE
                            <div className={styles.statsBadge}>
                                <div className={styles.statItem}>
                                    <strong>120M</strong>
                                    <span>Engagement</span>
                                </div>
                                <div className={styles.statItem}>
                                    <strong>320+</strong>
                                    <span>Clients</span>
                                </div>
                            </div>
                        </span>
                    </h1>

                    <div className={styles.footerRow}>
                        <Link href="/contact" className={styles.ctaBtn}>
                            Get Started
                            <div className={styles.arrow}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                        <p className={styles.subtext}>
                            Codexea exists to revolutionize the way brands connect and engage with their audiences in the digital era by leveraging innovative strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
