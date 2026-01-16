import { services } from '@/app/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './serviceDetail.module.css';

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default function ServiceDetail({ params }) {
    const service = services.find((s) => s.id === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <div className={`${styles.heroSection} ${styles[service.theme]}`}>
                <div className="container">
                    <Link href="/services" className={styles.backLink}>← Back to Services</Link>
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.description}>{service.description}</p>
                </div>
            </div>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.mainContent}>
                            <h2>Why Choose This Service?</h2>
                            <p className={styles.longDescription}>{service.longDescription}</p>

                            <div className={styles.featuresList}>
                                <h3>What We Offer</h3>
                                <ul>
                                    {service.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.benefitsCard}>
                                <h3>Key Benefits</h3>
                                <ul>
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.ctaContainer}>
                                    <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
