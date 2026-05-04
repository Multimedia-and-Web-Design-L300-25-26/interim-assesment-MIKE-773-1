const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

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
