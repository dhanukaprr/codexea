import styles from './contact.module.css';
import ContactForm from './ContactForm';

export const metadata = {
    title: "Contact Codexea",
    description: "Get in touch.",
};

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <div className={styles.splitLayout}>
                <div className={styles.textColumn}>
                    {/* Left/Top Red Panel */}
                    <div className={styles.infoPanel}>
                        <h1 className={styles.title}>LET&apos;S TALK</h1>
                        <div className={styles.contactDetails}>
                            <p className={styles.detailItem}>info@codexea.com</p>
                            <p className={styles.detailItem}>+94 77 9175 075</p>
                            <p className={styles.detailItem}>454/1 High Level Rd, Pannipitiya 10230</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/codexea" className={styles.socialLink}>FB</a>
                            <a href="https://www.instagram.com/codexea_srilanka" className={styles.socialLink}>IG</a>
                        </div>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
