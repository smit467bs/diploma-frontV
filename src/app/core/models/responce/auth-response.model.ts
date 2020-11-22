export interface AuthResponse {
  token: string;
  userInfo: {
    _id: string;
    email: string;
  };
}
