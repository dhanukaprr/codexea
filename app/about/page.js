import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner'; // Import PageBanner
import styles from './about.module.css';

export const metadata = {
    title: "About Codexea",
    description: "Learn about our mission.",
};

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <PageBanner
                title="WHO WE ARE"
                subtitle="Architects of the digital era, crafting bold and beautiful solutions."
                theme="navy"
            />

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
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/team/dumal-kanishka.png"
                                    alt="Dumal Kanishka - CEO"
                                    width={300}
                                    height={300}
                                    className={styles.founderImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.name}>Dumal Kanishka</h3>
                                <p className={styles.titles}>
                                    Chief Executive Officer (CEO) | Director of Operations | Software Engineer | Director of Design & Development
                                </p>
                                <p className={styles.education}>
                                    B.Sc. (Hons) in Software Engineering, National School of Business Management (NSBM).
                                </p>
                                <p className={styles.description}>
                                    Dumal leads the company's strategic direction, operations, and technology execution. With hands-on experience in software engineering, web development, and digital design, he drives the development of scalable, user-centric digital solutions while ensuring operational efficiency and technical excellence across all projects.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 - Red Theme */}
                        <div className={`${styles.teamCard} ${styles.red}`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/team/dhanuka-perera.png"
                                    alt="Dhanuka Perera - Director of Finance & Marketing"
                                    width={300}
                                    height={300}
                                    className={styles.founderImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.name}>Dhanuka Perera</h3>
                                <p className={styles.titles}>
                                    Director of Finance & Marketing | Business Strategist | Business Analyst & Consultant
                                </p>
                                <p className={styles.education}>
                                    B.Sc. (Hons) in Entrepreneurship (Special), Faculty of Management Studies and Commerce, University of Sri Jayewardenepura.
                                </p>
                                <p className={styles.description}>
                                    Dhanuka oversees finance and marketing strategy, combining analytical insight with business acumen. His expertise in financial planning, market strategy, consulting, and design supports data-driven decision-making, sustainable growth, and strong market positioning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
