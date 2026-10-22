import { createContext, type Dispatch } from 'react';
import type { Statut } from '../types';

export type Filtres = {
    statut: Statut | 'TOUTES';
    membreId: string | null;
    recherche: string;
};

export type Action =
    | { type: 'statut'; statut: Filtres['statut'] }
    | { type: 'membre'; id: string | null }
    | { type: 'recherche'; texte: string }
    | { type: 'reinitialiser' };

export const filtresInitiaux: Filtres = {
    statut: 'TOUTES',
    membreId: null,
    recherche: '',
};

export function filtresReducer(state: Filtres, action: Action): Filtres {
    switch (action.type) {
        case 'statut':
            return { ...state, statut: action.statut };
        case 'membre':
            return { ...state, membreId: action.id };
        case 'recherche':
            return { ...state, recherche: action.texte };
        case 'reinitialiser':
            return filtresInitiaux;
    }
}

export const FiltresStateContext = createContext<Filtres | null>(null);
export const FiltresDispatchContext = createContext<Dispatch<Action> | null>(null);