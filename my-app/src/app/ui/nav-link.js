'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Links() { // Assurez-vous que le nom du composant correspond à l'importation
    const pathname = usePathname();

    return (
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>
            <Link
                className={`link ${pathname === '/about' ? 'active' : ''}`}
                href="/about"
            >
                About
            </Link>

            <Link
                className={`link ${pathname === '/list' ? 'active' : ''}`}
                href="/list"
            >
                List
            </Link>
        </nav>
    );
}
