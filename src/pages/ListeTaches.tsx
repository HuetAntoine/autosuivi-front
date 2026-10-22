import { useFetch } from '../hooks/useFetch';
import type { Tache } from '../types';

export function ListeTaches() {
    const { data: taches, loading, error } = useFetch<Tache[]>('http://localhost:3001/taches');

    return (
        <main>
            <h1>Taches</h1>
            {loading && <p>Chargement…</p>}
            {error && <p role="alert">Erreur : {error.message}</p>}
            <ul>
                {taches?.map(t => (
                    <li key={t.id}>
                        {t.titre} — {t.statut}
                    </li>
                ))}
            </ul>
        </main>
    );
}