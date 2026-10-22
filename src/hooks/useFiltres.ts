import { useContext } from 'react';
import { FiltresStateContext, FiltresDispatchContext } from '../store/filtres';

export function useFiltres() {
    const ctx = useContext(FiltresStateContext);
    if (!ctx) throw new Error('useFiltres doit être utilisé dans <FiltresProvider>');
    return ctx;
}

export function useFiltresDispatch() {
    const ctx = useContext(FiltresDispatchContext);
    if (!ctx) throw new Error('useFiltresDispatch doit être utilisé dans <FiltresProvider>');
    return ctx;
}