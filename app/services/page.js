import Link from 'next/link';
import PageBanner from '@/components/PageBanner'; // Import PageBanner
import ServiceCard from '@/components/ServiceCard';
import { getServices } from '@/app/data/services';

export const dynamic = 'force-dynamic';
import styles from './services.module.css';

export const metadata = {
    title: "Our Services | Codexea",
    description: "Explore our comprehensive digital services including Web Development, SEO, Branding, and UI/UX Design.",
};

export default async function Services() {
    const services = await getServices();
    return (
        <div className={styles.servicesPage}>
            {/* Header Section - Uses Reusable Hero */}
            <PageBanner
                title="WE DO EVERYTHING"
                subtitle="From concept to launch, we handle the pixels so you can handle the business."
                theme="navy"
            />

            {/* Grid Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.servicesGrid}>

                        {/* Row 1 */}
                        <div className={styles.gridItemLarge}>
                            <Link href={`/services/${services[0].id}`}>
                                <ServiceCard {...services[0]} />
                            </Link>
                        </div>

                        <div className={styles.gridItemSmall}>
                            <Link href={`/services/${services[1].id}`}>
                                <ServiceCard {...services[1]} />
                            </Link>
                        </div>

                        {/* Row 2 */}
                        <div className={styles.gridItemSmall}>
                            <Link href={`/services/${services[2].id}`}>
                                <ServiceCard {...services[2]} />
                            </Link>
                        </div>

                        <div className={styles.gridItemLarge}>
                            <Link href={`/services/${services[3].id}`}>
                                <ServiceCard {...services[3]} />
                            </Link>
                        </div>

                        {/* Row 3 */}
                        <div className={styles.gridItemLarge}>
                            <Link href={`/services/${services[4].id}`}>
                                <ServiceCard {...services[4]} />
                            </Link>
                        </div>

                        <div className={styles.gridItemSmall}>
                            <Link href={`/services/${services[5].id}`}>
                                <ServiceCard {...services[5]} />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
