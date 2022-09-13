export interface UserLogin {
  id: string;
  name: string;
}

export interface createAccount {
  message?: string;
  status: number;
}

export interface error {
  status: number;
  message: string;
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
  user: {
    id: string;
    name: string;
  };
}
