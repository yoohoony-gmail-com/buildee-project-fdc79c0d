/**
 * A simple fetch wrapper for API calls.
 * This is prepared for future integration with a real backend API.
 */

// This would typically be an environment variable
const API_BASE_URL = '/api';

interface RequestOptions extends RequestInit {
  // Custom options can be added here in the future
}

async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { headers: customHeaders, body, ...rest } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...rest,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      // Try to parse error response, otherwise throw a generic error
      const errorData = await response.json().catch(() => ({ message: `HTTP error! Status: ${response.status}` }));
      throw new Error(errorData.message || 'An unknown API error occurred.');
    }

    if (response.status === 204) {
      // No Content
      return null as T;
    }

    return response.json();
  } catch (error) {
    console.error('API Client Error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected network error occurred.');
  }
}

export default apiClient;