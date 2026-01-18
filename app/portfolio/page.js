import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/app/data/projects';
import styles from './portfolio.module.css';

export const metadata = {
    title: "Portfolio | Codexea Case Studies & Success Stories",
    description: "Explore our portfolio of successful projects. From e-commerce platforms to brand identity designs, see how Codexea helps businesses grow.",
};

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
                            <ProjectCard key={project.id} {...project} />
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
