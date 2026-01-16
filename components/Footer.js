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
                        <li><Link href="/services#web-dev">Web Development</Link></li>
                        <li><Link href="/services#digital-marketing">Digital Marketing</Link></li>
                        <li><Link href="/services#ui-ux">UI/UX Design</Link></li>
                        <li><Link href="/services#seo">SEO & Analytics</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul className={styles.links}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
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
