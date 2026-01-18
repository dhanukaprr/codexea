import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import PageBanner from '@/components/PageBanner';
import { getProjects } from '@/app/data/projects';
import styles from './portfolio.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Portfolio | Codexea Case Studies & Success Stories",
    description: "Explore our portfolio of successful projects. From e-commerce platforms to brand identity designs, see how Codexea helps businesses grow.",
};

export default function Portfolio() {
    const projects = getProjects();
    return (
        <div className={styles.portfolioPage}>
            <PageBanner
                title="OUR WORK"
                subtitle="Results that speak louder than code."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.projectGrid}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>

                    <div className={styles.ctaBox}>
                        <h2>Start Your Project</h2>
                        <Link href="/contact" className={styles.roundBtn}>Let&apos;s Talk</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
