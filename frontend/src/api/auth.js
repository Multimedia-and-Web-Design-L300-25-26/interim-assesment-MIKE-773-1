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

export const register = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    ...defaultOptions,
    body: JSON.stringify(data),
  });
  return response.json();
};

export const login = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    ...defaultOptions,
    body: JSON.stringify(data),
  });
  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  return response.json();
};

export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
  });
  return response.json();
};
