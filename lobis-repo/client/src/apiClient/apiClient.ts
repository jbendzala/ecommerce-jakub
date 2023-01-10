import axios from 'axios';
import { useMutation } from 'react-query';
import { LoginPayload, RegistrationPayload } from '../types/types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
});

export const useLogin = () => {
  return useMutation('login', ({ username, password }: LoginPayload) =>
    apiClient.post('/signin', { username: username, password: password })
  );
};

export const useRegistration = () => {
  return useMutation(
    'registration',
    ({ username, password, email, phone }: RegistrationPayload) =>
      apiClient.post('/user', { username, password, email, phone })
  );
};
