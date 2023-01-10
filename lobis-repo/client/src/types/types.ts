export type LoginPayload = {
  username: string;
  password: string;
};

export type RegistrationPayload = {
  username: string;
  password: string;
  email?: string;
  phone?: string;
};
