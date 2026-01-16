import Link from 'next/link';
import styles from './portfolio.module.css';

export const metadata = {
    title: "Portfolio | Codexea Case Studies",
    description: "See how we've helped businesses grow.",
};

const projects = [
    {
        id: 1,
        client: 'FinTech Corp',
        category: 'Finance',
        result: '+40% Retention',
        theme: 'dark' // Navy
    },
    {
        id: 2,
        client: 'HealthyLife',
        category: 'Healthcare',
        result: '2x Traffic',
        theme: 'lilac' // Lilac
    },
    {
        id: 3,
        client: 'EcoShop',
        category: 'E-commerce',
        result: '2.5x Conv.',
        theme: 'light' // White
    },
    {
        id: 4,
        client: 'TechStart',
        category: 'SaaS',
        result: 'Series A',
        theme: 'dark'
    }
];

export default function Portfolio() {
    return (
        <div className={styles.portfolioPage}>
            <section className={styles.headerSection}>
                <div className="container">
                    <h1 className={styles.pageTitle}>OUR WORK</h1>
                    <p className={styles.pageSubtitle}>Results that speak louder than code.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.projectGrid}>
                        {projects.map((project) => (
                            <div key={project.id} className={`${styles.projectCard} ${styles[project.theme]}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>{project.category}</span>
                                    <div className={styles.arrowIcon}>↗</div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h2>{project.client}</h2>
                                    <div className={styles.resultBadge}>
                                        {project.result}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaBox}>
                        <h2>Start Your Project</h2>
                        <Link href="/contact" className={styles.roundBtn}>Let's Talk</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
