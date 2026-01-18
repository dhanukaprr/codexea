import styles from './PageBanner.module.css';

const PageBanner = ({ title, subtitle, theme = 'red' }) => {
    return (
        <section className={`${styles.bannerSection} ${styles[theme]}`}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageBanner;
