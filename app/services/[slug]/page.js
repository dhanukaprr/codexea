import { getServices, getServiceById } from '@/app/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './serviceDetail.module.css';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceById(slug);

    if (!service) {
        return {
            title: 'Service Not Found | Codexea',
            description: 'The requested service could not be found.',
        };
    }

    return {
        title: `${service.title} Services | Codexea`,
        description: service.description,
        openGraph: {
            title: `${service.title} Services | Codexea`,
            description: service.description,
            // images: ['/images/default-og.jpg'] // Optional if you have explicit images
        }
    };
}

export async function generateStaticParams() {
    const services = getServices();
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServiceDetail({ params }) {
    const { slug } = await params;
    const service = getServiceById(slug);

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
