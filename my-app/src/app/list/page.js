import Link from 'next/link';
import styles from './styles.module.css';

const items = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
];

export default function ListPage() {
    return (
        <section className={styles.list}>
            <h2 className={styles.title}>Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link href={`/items/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
