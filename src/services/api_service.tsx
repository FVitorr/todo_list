import axios, { AxiosError } from 'axios';

export const baseURL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:8080/';
const api = axios.create({ baseURL });

export type ApiResponse<T> = { error: false; body: T; } | { error: true; body: string; };

type ApiError = AxiosError;
export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error);
};

export const formatApiError = (error: unknown) => {
  if (isApiError(error)) {
    if (error.code !== 'ECONNABORTED' && error.response !== undefined) {
      // TODO: obter a chave correta da API
      const responseError = error.response.data as any;
      return {
        error: true,
        body: responseError.body
      };
    }
  }
  return {
    error: true,
    body: 'Não conseguimos comunicar com o servidor.'
  };
};

export default api;
