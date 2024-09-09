'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './nav-link.module.scss'; // Import du fichier CSS module avec un nom correspondant

export function Links() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            {/* Section de gauche */}
            <div className={styles.left}>
                <Link
                    className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
                    href="/"
                >
                    Home
                </Link>
            </div>

            {/* Section de droite */}
            <div className={styles.right}>
                <Link
                    className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className={`${styles.link} ${pathname === '/list' ? styles.active : ''}`}
                    href="/list"
                >
                    List
                </Link>
            </div>
        </nav>
    );
}
