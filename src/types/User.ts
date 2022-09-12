export interface UserLogin {
  id: string;
  name: string;
}

export interface loginResponse {
  status: number;
  data: {
    user: {
      id: string;
      name: string
    };
    token: string;
  };
  error?: {
    status: number;
    message: string;
  };
}
export interface validateTokenResponse {
  user:{
    id: string;
    name: string
  };
  error?: {
    status: number;
    message?: string;
  };
}
