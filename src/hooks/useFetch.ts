import { useEffect, useState } from 'react';

export const API_URL = 'http://localhost:3001';

type Etat<T> = { url: string; data: T | null; error: Error | null };

export function useFetch<T>(url: string) {
    const [etat, setEtat] = useState<Etat<T>>({ url: '', data: null, error: null });

    useEffect(() => {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then(r => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json() as Promise<T>;
            })
            .then(data => setEtat({ url, data, error: null }))
            .catch(error => {
                if (error.name !== 'AbortError') setEtat({ url, data: null, error });
            });

        return () => controller.abort();
    }, [url]);

    const loading = etat.url !== url;
    return { data: etat.data, error: loading ? null : etat.error, loading };
}