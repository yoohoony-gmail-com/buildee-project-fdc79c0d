import { useState, useEffect } from 'react';
import { Season } from '@/types';
import { galleryApi } from '@/api/galleryApi';

export function useSeason(id: string | undefined) {
  const [season, setSeason] = useState<Season | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(function() {
    if (!id) {
      setIsLoading(false);
      setSeason(null);
      setError(null);
      return;
    }

    let isMounted = true;

    const fetchSeason = async function() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await galleryApi.getSeasonById(id);
        if (isMounted) {
          if (data) {
            setSeason(data);
          } else {
            setSeason(null);
            setError(new Error('Season not found.'));
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch season.'));
          setSeason(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSeason();

    return function() {
      isMounted = false;
    };
  }, [id]);

  return { season, isLoading, error };
}
