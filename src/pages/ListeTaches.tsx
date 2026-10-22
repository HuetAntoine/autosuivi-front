import { BarreFiltres } from '../components/BarreFiltres';
import { useFetch, API_URL } from '../hooks/useFetch';
import { useFiltres } from '../hooks/useFiltres';
import { LIBELLES_STATUT, type Tache } from '../types';

export function ListeTaches() {
    const { statut, membreId } = useFiltres();

    const params = new URLSearchParams();
    if (statut !== 'TOUTES') params.set('statut', statut);
    if (membreId) params.set('membreId', membreId);

    const { data: taches, loading, error } = useFetch<Tache[]>(`${API_URL}/taches?${params}`);

    return (
        <main>
            <h1>Tâches</h1>
            <BarreFiltres />
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