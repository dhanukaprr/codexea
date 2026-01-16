import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
    title: "About Codexea",
    description: "Learn about our mission.",
};

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>WHO WE ARE</h1>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.missionBox}>
                        <h2>We are the <span className={styles.redText}>architects</span> of the new digital era.</h2>
                        <div className={styles.divider}></div>
                        <p>Codexea began with a simple idea: that technology should be brilliant, bold, and beautiful. We don't do boring.</p>
                    </div>

                    <div className={styles.teamGrid}>
                        {/* Team Member 1 - Navy Theme */}
                        <div className={`${styles.teamCard} ${styles.navy}`}>
                            <div className={styles.cardHeader}>
                                <span className={styles.role}>CEO, Co Founder</span>
                                <span className={styles.arrow}>→</span>
                            </div>
                            <h3 className={styles.name}>Dumal Kanishka</h3>
                        </div>

                        {/* Team Member 2 - Lilac Theme */}
                        <div className={`${styles.teamCard} ${styles.lilac}`}>
                            <div className={styles.cardHeader}>
                                <span className={styles.role}>Co Founder</span>
                                <span className={styles.arrow}>→</span>
                            </div>
                            <h3 className={styles.name}>Dhanuka Perera</h3>
                        </div>

                        {/* Removing 3rd placeholder or keeping it as 'Join Us' if preferred, 
                but user only specified 2. I will leave just these 2 for accuracy. */}
                    </div>
                </div>
            </section>
        </div>
    );
}
