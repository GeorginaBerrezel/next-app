import { useRouter } from 'next/router';

export default function ItemPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Item Details for ID: {id}</h1>
            {/* Affiche ici les détails pour l'élément avec l'ID spécifié */}
        </div>
    );
}
