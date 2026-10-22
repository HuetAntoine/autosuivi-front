export type Statut = 'A_FAIRE' | 'EN_COURS' | 'EN_REVUE' | 'TERMINEE';

export type Tache = { id: string; titre: string; statut: Statut; projetId: string; membreId: string | null; echeance: string; };

export type Projet = { id: string; nom: string };

export type Membre = { id: string; nom: string };

export type Idee = { id: string; texte: string };

export const LIBELLES_STATUT: Record<Statut, string> = {
    A_FAIRE: 'À faire',
    EN_COURS: 'En cours',
    EN_REVUE: 'En revue',
    TERMINEE: 'Terminée',
};