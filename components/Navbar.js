'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isContact = pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            // Show background after scrolling 50px
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isContact ? styles.contactNav : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/images/logo.png"
                        alt="CODEXEA"
                        width={80}
                        height={24}
                        className={styles.logoImage}
                        priority
                    />
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/portfolio" className={styles.link}>Work</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>
                <Link href="/contact" className="btn btn-primary">
                    Let's Talk
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
