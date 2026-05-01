import { useState, useEffect } from 'react';
import { Season } from '@/types';
import api from '@/api/client';

export function useSeasons() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        setIsLoading(true);
        const data = await api.getSeasons();
        setSeasons(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeasons();
  }, []);

  return { seasons, isLoading, error };
}

export function useSeason(id: string | undefined) {
  const [season, setSeason] = useState<Season | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      setSeason(null);
      return;
    }

    const fetchSeason = async () => {
      try {
        setIsLoading(true);
        const data = await api.getSeason(id);
        setSeason(data || null);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        setSeason(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeason();
  }, [id]);

  return { season, isLoading, error };
}