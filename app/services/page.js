import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import styles from './services.module.css';

export const metadata = {
    title: "Our Services | Codexea",
    description: "Explore our comprehensive digital services including Web Development, SEO, Branding, and UI/UX Design.",
};

const servicesData = [
    {
        id: 'web-development',
        title: 'Web Design & Development',
        description: 'The internet is the future. We would like to help our customers master the digital space with awesome websites!',
        theme: 'dark',
        link: '#web-development'
    },
    {
        id: 'social-media',
        title: 'Social Media Marketing',
        description: 'Be where the people are! Talk to them directly, through creatively created Social Media Content.',
        theme: 'lilac',
        link: '#social-media'
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        description: 'Design is the way to speak to the heart. Capture the eye and the hearts of those who matter through great designs.',
        theme: 'light',
        link: '#graphic-design'
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        description: 'Make of your websites to rank higher on Google Search Results! This will increase your visitors and sales.',
        theme: 'dark',
        link: '#seo'
    },
    {
        id: 'business-automation',
        title: 'Business Automation',
        description: 'Get rid of costly hiring and outsourcing of work! Easily do them yourself with our automation services.',
        theme: 'lilac',
        link: '#business-automation'
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        description: 'Good content should be simple and powerful enough to drive the point home. We will help you reach the right audience in the right way.',
        theme: 'light',
        link: '#content-writing'
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

                        {/* Row 3 */}
                        <div className={styles.gridItemLarge}>
                            <ServiceCard {...servicesData[4]} />
                        </div>

                        <div className={styles.gridItemSmall}>
                            <ServiceCard {...servicesData[5]} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
