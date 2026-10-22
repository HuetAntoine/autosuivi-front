import { Link } from 'react-router';
import { BarreFiltres } from '../components/BarreFiltres';
import { useTachesFiltrees } from '../hooks/useTachesFiltrees';
import { LIBELLES_STATUT } from '../types';

export function ListeTaches() {
    const { taches, loading, error } = useTachesFiltrees();

    return (
        <main>
            <h1>Tâches</h1>
            <BarreFiltres />
            {loading && <p>Chargement…</p>}
            {error && <p role="alert">Erreur : {error.message}</p>}
            {taches?.length === 0 && <p>Aucune tâche trouvée.</p>}
            <ul>
                {taches?.map(t => (
                    <li key={t.id}>
                        <Link to={`/taches/${t.id}`}>{t.titre}</Link> — {LIBELLES_STATUT[t.statut]}
                    </li>
                ))}
            </ul>
        </main>
    );
}