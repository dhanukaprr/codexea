'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
                    <Image
                        src="/images/logo.png"
                        alt="CODEXEA"
                        width={80}
                        height={24}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/portfolio" className={styles.link}>Work</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.rightActions}>
                    <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
                        Let's Talk
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <div className={styles.mobileLinks}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
                        <Link href="/services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                        <Link href="/portfolio" className={styles.mobileLink} onClick={closeMenu}>Work</Link>
                        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
                        <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
