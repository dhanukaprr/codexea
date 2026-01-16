import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import styles from './services.module.css';

export const metadata = {
    title: "Our Services | Codexea",
    description: "Explore our comprehensive digital services including Web Development, SEO, Branding, and UI/UX Design.",
};

const servicesData = [
    {
        id: 'web-dev',
        title: 'Web Develop',
        description: 'Custom websites built with modern technologies for speed.',
        theme: 'dark', // Navy
        link: '#web-dev'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'SEO, SEM, and social media strategies designed to increase visibility.',
        theme: 'lilac',
        link: '#marketing'
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Design',
        description: 'User-centric designs that look stunning and provide seamless experiences.',
        theme: 'light', // White/Off-white for contrast
        link: '#ui-ux'
    },
    {
        id: 'branding',
        title: 'Branding',
        description: 'Build a memorable brand identity with professional logo design.',
        theme: 'dark',
        link: '#branding'
    },
    {
        id: 'seo',
        title: 'SEO & Analytics',
        description: 'Make informed decisions with deep insights and optimization.',
        theme: 'lilac',
        link: '#seo'
    }
];

export default function Services() {
    return (
        <div className={styles.servicesPage}>
            {/* Header Section - Matches Hero Style */}
            <section className={styles.headerSection}>
                <div className="container">
                    <h1 className={styles.pageTitle}>
                        WE DO <br />
                        <span className={styles.highlight}>EVERYTHING</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        From concept to launch, we handle the pixels so you can handle the business.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.servicesGrid}>

                        {/* Custom Layout for grid */}

                        {/* Row 1 */}
                        <div className={styles.gridItemLarge}>
                            <ServiceCard {...servicesData[0]} />
                        </div>

                        <div className={styles.gridItemSmall}>
                            <ServiceCard {...servicesData[1]} />
                        </div>

                        {/* Row 2 */}
                        <div className={styles.gridItemSmall}>
                            <ServiceCard {...servicesData[2]} />
                        </div>

                        <div className={styles.gridItemLarge}>
                            <ServiceCard {...servicesData[3]} />
                        </div>

                        {/* Row 3 - Full Width */}
                        <div className={styles.gridItemFull}>
                            <ServiceCard
                                title="SEO & Analytics"
                                description="We don't just guess. We track, analyze, and optimize every single interaction."
                                theme="lilac"
                                link="#seo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
