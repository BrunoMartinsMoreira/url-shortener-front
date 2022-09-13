export interface UserLogin {
  id: string;
  name: string;
}

export interface createAccount {
  message?: string;
  status: number;
}

export interface loginResponse {
  status: number;
  data: {
    user: {
      id: string;
      name: string;
    };
    token: string;
  };
}
export interface validateTokenResponse {
  status: number;
  user: {
    id: string;
    name: string;
  };
}
