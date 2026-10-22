import { useReducer, type ReactNode } from 'react';
import {
    filtresReducer,
    filtresInitiaux,
    FiltresStateContext,
    FiltresDispatchContext,
} from './filtres';

export function FiltresProvider({ children }: { children: ReactNode }) {
    const [filtres, dispatch] = useReducer(filtresReducer, filtresInitiaux);

    return (
        <FiltresDispatchContext value={dispatch}>
            <FiltresStateContext value={filtres}>{children}</FiltresStateContext>
        </FiltresDispatchContext>
    );
}