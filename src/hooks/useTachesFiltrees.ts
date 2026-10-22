import { useDebounce } from './useDebounce';
import { useFetch, API_URL } from './useFetch';
import { useFiltres } from './useFiltres';
import type { Tache } from '../types';

export function useTachesFiltrees() {
    const { statut, membreId, recherche } = useFiltres();
    const rechercheDiffusee = useDebounce(recherche, 300);

    const params = new URLSearchParams();
    if (statut !== 'TOUTES') params.set('statut', statut);
    if (membreId) params.set('membreId', membreId);

    const { data, loading, error } = useFetch<Tache[]>(`${API_URL}/taches?${params}`);

    const texte = rechercheDiffusee.trim().toLowerCase();
    const taches = texte
        ? data?.filter(t => t.titre.toLowerCase().includes(texte))
        : data;

    return { taches, loading, error };
}