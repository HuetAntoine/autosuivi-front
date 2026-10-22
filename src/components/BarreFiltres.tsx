import { useFiltres, useFiltresDispatch } from '../hooks/useFiltres';
import { useFetch, API_URL } from '../hooks/useFetch';
import { LIBELLES_STATUT, type Membre } from '../types';
import type { Filtres } from '../store/filtres';

export function BarreFiltres() {
    const { statut, membreId, recherche } = useFiltres();
    const dispatch = useFiltresDispatch();
    const { data: membres } = useFetch<Membre[]>(`${API_URL}/membres`);

    return (
        <form role="search" onSubmit={e => e.preventDefault()}>
            <label>
                Recherche{' '}
                <input
                    value={recherche}
                    onChange={e => dispatch({ type: 'recherche', texte: e.target.value })}
                />
            </label>

            <label>
                Statut{' '}
                <select
                    value={statut}
                    onChange={e =>
                        dispatch({ type: 'statut', statut: e.target.value as Filtres['statut'] })
                    }
                >
                    <option value="TOUTES">Toutes</option>
                    {Object.entries(LIBELLES_STATUT).map(([valeur, libelle]) => (
                        <option key={valeur} value={valeur}>
                            {libelle}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Membre{' '}
                <select
                    value={membreId ?? ''}
                    onChange={e => dispatch({ type: 'membre', id: e.target.value || null })}
                >
                    <option value="">Tous</option>
                    {membres?.map(m => (
                        <option key={m.id} value={m.id}>
                            {m.nom}
                        </option>
                    ))}
                </select>
            </label>

            <button type="button" onClick={() => dispatch({ type: 'reinitialiser' })}>
                Réinitialiser
            </button>
        </form>
    );
}