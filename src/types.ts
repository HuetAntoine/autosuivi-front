export type Statut = 'A_FAIRE' | 'EN_COURS' | 'EN_REVUE' | 'TERMINEE';

export type Tache = { id: string; titre: string; statut: Statut; projetId: string; membreId: string | null; echeance: string; };

export type Projet = { id: string; nom: string };

export type Membre = { id: string; nom: string };

export type Idee = { id: string; texte: string };