import { Link, useParams } from 'react-router';
import { useFetch, API_URL } from '../hooks/useFetch';
import { LIBELLES_STATUT, type Membre, type Tache } from '../types';

export function FicheTache() {
    const { id } = useParams();
    const { data: tache, loading, error } = useFetch<Tache>(`${API_URL}/taches/${id}`);
    const { data: membres } = useFetch<Membre[]>(`${API_URL}/membres`);

    if (loading) return <p>Chargement…</p>;
    if (error || !tache) return <p role="alert">Tâche introuvable.</p>;

    const membre = membres?.find(m => m.id === tache.membreId);

    return (
        <main>
            <Link to="/taches">← Retour à la liste</Link>
            <h1>{tache.titre}</h1>
            <p>Statut : {LIBELLES_STATUT[tache.statut]}</p>
            <p>Membre : {tache.membreId === null ? 'Non assignée' : (membre?.nom ?? '…')}</p>
            {tache.echeance && (
                <p>Échéance : {new Date(tache.echeance).toLocaleDateString('fr-FR')}</p>
            )}
        </main>
    );
}