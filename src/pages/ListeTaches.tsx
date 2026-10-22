import { useFetch, API_URL } from '../hooks/useFetch';
import { LIBELLES_STATUT, type Tache } from '../types';

export function ListeTaches() {
    const { data: taches, loading, error } = useFetch<Tache[]>(`${API_URL}/taches`);

    return (
        <main>
            <h1>Taches</h1>
            {loading && <p>Chargement…</p>}
            {error && <p role="alert">Erreur : {error.message}</p>}
            <ul>
                {taches?.map(t => (
                    <li key={t.id}>
                        {t.titre} — {LIBELLES_STATUT[t.statut]}
                    </li>
                ))}
            </ul>
        </main>
    );
}