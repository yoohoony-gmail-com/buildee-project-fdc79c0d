import { Season } from '@/types';
import { MOCK_SEASONS } from './mockData';

// This is a mock API client. In a real application, this would use fetch
// to make network requests to a backend server.

const api = {
  getSeasons: async (): Promise<Season[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return Promise.resolve(MOCK_SEASONS);
  },

  getSeason: async (id: string): Promise<Season | undefined> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const season = MOCK_SEASONS.find(s => s.id === id);
    if (season) {
      return Promise.resolve(season);
    }
    return Promise.reject(new Error('Season not found'));
  },
};

export default api;