import styles from "./styles.module.css";

export default function ListLayout({ children }) {
    return (
        <section className={styles.list}>
            {/* Utilisation de la classe locale 'nav' */}
            <nav className={styles.nav}>
                <h2 className={styles.title}>nav list</h2>
            </nav>
            {children}
            <h3 className={styles.subtitle}>Content list page</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </section>
    );
}
