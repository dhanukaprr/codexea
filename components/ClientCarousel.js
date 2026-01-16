import styles from './ClientCarousel.module.css';

const ClientCarousel = () => {
    const clients = [
        "University of Sri Jayewardenepura",
        "LHP Holdings",
        "O2 Cafe",
        "Aditi Infinity",
        "Trendy Wear"
    ];

    // Duplicate list for infinite scroll effect
    const carouselItems = [...clients, ...clients, ...clients];

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.track}>
                {carouselItems.map((client, index) => (
                    <div key={index} className={styles.clientItem}>
                        <span className={styles.clientName}>{client}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientCarousel;
