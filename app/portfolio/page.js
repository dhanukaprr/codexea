import Link from 'next/link';
import styles from './portfolio.module.css';

export const metadata = {
    title: "Portfolio | Codexea Case Studies",
    description: "See how we've helped businesses grow.",
};

const projects = [
    {
        id: 1,
        client: 'Urban LD',
        category: 'Urban Planning',
        link: 'https://urbanld.com/',
        theme: 'dark'
    },
    {
        id: 2,
        client: 'Eco Lanka Food Processing',
        category: 'Food Processing',
        link: 'https://ecolankafp.lk/',
        theme: 'lilac'
    },
    {
        id: 3,
        client: 'Captain Sports',
        category: 'E-commerce',
        link: 'http://captain-sports.com/',
        theme: 'light'
    },
    {
        id: 4,
        client: 'Design Edit',
        category: 'Interior Design',
        link: 'https://designedit.lk/',
        theme: 'dark'
    },
    {
        id: 5,
        client: 'Aditi Infinity',
        category: 'E-commerce',
        link: 'https://aditiinfinity.com/',
        theme: 'lilac'
    },
    {
        id: 6,
        client: 'Lumos Integrated',
        category: 'Renewable Energy',
        link: 'https://lumosintegrated.com/',
        theme: 'light'
    },
    {
        id: 7,
        client: 'Golden Bell Management',
        category: 'Maritime Services',
        link: 'https://goldenbellmanagement.com',
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
                            <Link href={project.link} key={project.id} target="_blank" className={`${styles.projectCard} ${styles[project.theme]}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>{project.category}</span>
                                    <div className={styles.arrowIcon}>↗</div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h2>{project.client}</h2>
                                    <div className={styles.resultBadge}>
                                        Visit Site
                                    </div>
                                </div>
                            </Link>
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
