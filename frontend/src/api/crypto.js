const BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? '/api' : '');

if (!BASE_URL) {
  console.error(
    'Missing VITE_API_BASE_URL in production. Set VITE_API_BASE_URL in Netlify environment variables and redeploy the frontend.'
  );
}

const defaultOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getCryptos = async () => {
  const response = await fetch(`${BASE_URL}/crypto`, { method: 'GET', credentials: 'include' });
  return response.json();
};

export const getGainers = async () => {
  const response = await fetch(`${BASE_URL}/crypto/gainers`, { method: 'GET', credentials: 'include' });
  return response.json();
};

export const getNewListings = async () => {
  const response = await fetch(`${BASE_URL}/crypto/new`, { method: 'GET', credentials: 'include' });
  return response.json();
};

export const createCrypto = async (data) => {
  const response = await fetch(`${BASE_URL}/crypto`, {
    method: 'POST',
    ...defaultOptions,
    body: JSON.stringify(data),
  });
  return response.json();
};
