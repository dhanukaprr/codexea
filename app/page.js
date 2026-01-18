import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard'; // Import ProjectCard
import ClientCarousel from '@/components/ClientCarousel';
import { projects } from '@/app/data/projects'; // Import projects data
import styles from './home.module.css';

export const metadata = {
  title: "Codexea | Digital Marketing Agency & Web Development",
  description: "Codexea is your partner for digital growth. We specialize in custom Web Development, SEO, Social Media Strategy, and Creative Branding.",
  keywords: "Web Development, Digital Marketing, SEO, Social Media Marketing, Codexea, Sri Lanka, UI/UX Design, Branding",
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2>We Design <br /> Just Quickly</h2>
            <Link href="/services" className={styles.linkArrow}>See all services →</Link>
          </div>

          <div className={styles.bentoGrid}>
            {/* Navy Card */}
            <div className={styles.span2}>
              <ServiceCard
                title="Social Strategy"
                description="Our Social Strategy is all about developing customized plans that align seamlessly with your brand's goals."
                theme="dark"
                link="/services#marketing"
              />
            </div>

            {/* Lilac Card */}
            <div className={styles.span1}>
              <ServiceCard
                title="Creative Management"
                description="Our creators take the charge."
                theme="lilac"
                link="/services#creative"
              />
            </div>

            {/* Lilac Card Inverse */}
            <div className={styles.span1}>
              <ServiceCard
                title="Influencer Partnerships"
                description="We specialize in connecting your brand with the right influencers."
                theme="lilac"
                link="/services#influencer"
              />
            </div>

            {/* Dark Card */}
            <div className={styles.span2}>
              <ServiceCard
                title="Social Publish"
                description="Our Social Publishing ensures your content reaches the right audience at the right time."
                theme="dark"
                link="/services#publish"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className="container">
          <h2 className={styles.whyTitle}>WHY CHOOSE US</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>01</span>
              <h3>Results Driven</h3>
              <p>We don't just create; we convert. Every strategy is backed by data and focused on your ROI.</p>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>02</span>
              <h3>Tailored Strategies</h3>
              <p>No cookie-cutter solutions. We build bespoke digital roadmaps that fit your unique brand DNA.</p>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>03</span>
              <h3>Expert Team</h3>
              <p>Our squad of digital natives lives and breathes code, design, and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className={styles.clientsSection}>
        <div className="container">
          <h2 className={styles.clientsTitle}>OUR TRUSTED PARTNERS</h2>
          <ClientCarousel />
        </div>
      </section>

      {/* Portfolio Teaser - keeping it consistent with new red styles */}
      <section className={styles.workSection}>
        <div className="container">
          <h2 className={styles.workTitle}>EXPLORE OUR MOST <br /> SUCCESSFUL PROJECT</h2>

          <div className={styles.workGrid}>
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className={styles.workLinkContainer}>
            <Link href="/portfolio" className={styles.workLink}>
              See all work <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
