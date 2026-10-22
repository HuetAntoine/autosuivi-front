import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
    const [etat, setEtat] = useState<{
        data: T | null;
        error: Error | null;
        loading: boolean;
    }>({ data: null, error: null, loading: true });

    useEffect(() => {
        const controller = new AbortController();
        setEtat(e => ({ ...e, loading: true }));

        fetch(url, { signal: controller.signal })
            .then(r => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json() as Promise<T>;
            })
            .then(data => setEtat({ data, error: null, loading: false }))
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setEtat({ data: null, error, loading: false });
                }
            });

        return () => controller.abort();
    }, [url]);

    return etat;
}