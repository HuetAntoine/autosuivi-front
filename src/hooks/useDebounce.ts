import { useEffect, useState } from 'react';

export function useDebounce<T>(valeur: T, delai = 300): T {
    const [valeurRetardee, setValeurRetardee] = useState(valeur);

    useEffect(() => {
        const id = setTimeout(() => setValeurRetardee(valeur), delai);
        return () => clearTimeout(id);
    }, [valeur, delai]);

    return valeurRetardee;
}