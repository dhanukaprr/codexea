import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logo}>Codexea</Link>
                    <p className={styles.description}>Results-driven digital solutions specializing in Web Development, Digital Marketing, and UI/UX Design.</p>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul className={styles.links}>
                        <li><Link href="/services/web-development">Web Design & Development</Link></li>
                        <li><Link href="/services/social-media">Social Media Marketing</Link></li>
                        <li><Link href="/services/graphic-design">Graphic Design</Link></li>
                        <li><Link href="/services/seo">Search Engine Optimization</Link></li>
                        <li><Link href="/services/business-automation">Business Automation</Link></li>
                        <li><Link href="/services/content-writing">Content Writing</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul className={styles.links}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Get in Touch</h3>
                    <p>454/1 High Level Rd,<br />Pannipitiya 10230</p>
                    <p>+94 77 9175 075</p>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com/codexea" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/codexea_srilanka" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    <p>&copy; {currentYear} Codexea. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
