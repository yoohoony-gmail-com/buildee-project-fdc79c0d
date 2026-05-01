import { Season } from '@/types';
import { mockSeasons } from './mockData';

const ARTIFICIAL_DELAY_MS = 500;

function simulateApiCall<T>(data: T): Promise<T> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(data);
    }, ARTIFICIAL_DELAY_MS);
  });
}

export const galleryApi = {
  getSeasons: function(): Promise<Season[]> {
    return simulateApiCall(mockSeasons);
  },

  getSeasonById: function(id: string): Promise<Season | undefined> {
    const season = mockSeasons.find(function(s) { return s.id === id; });
    return simulateApiCall(season);
  },
};
