import { Link } from 'react-router';
import { BarreFiltres } from '../components/BarreFiltres';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch, API_URL } from '../hooks/useFetch';
import { useFiltres } from '../hooks/useFiltres';
import { LIBELLES_STATUT, type Tache } from '../types';

export function ListeTaches() {
    const { statut, membreId, recherche } = useFiltres();
    const rechercheDiffusee = useDebounce(recherche, 300);

    const params = new URLSearchParams();
    if (statut !== 'TOUTES') params.set('statut', statut);
    if (membreId) params.set('membreId', membreId);

    const { data: taches, loading, error } = useFetch<Tache[]>(`${API_URL}/taches?${params}`);

    const texte = rechercheDiffusee.trim().toLowerCase();
    const visibles = texte
        ? taches?.filter(t => t.titre.toLowerCase().includes(texte))
        : taches;

    return (
        <main>
            <h1>Tâches</h1>
            <BarreFiltres />
            {loading && <p>Chargement…</p>}
            {error && <p role="alert">Erreur : {error.message}</p>}
            {visibles?.length === 0 && <p>Aucune tâche trouvée.</p>}
            <ul>
                {visibles?.map(t => (
                    <li key={t.id}>
                        <Link to={`/taches/${t.id}`}>{t.titre}</Link> — {LIBELLES_STATUT[t.statut]}
                    </li>
                ))}
            </ul>
        </main>
    );
}