export interface LoginResponse {
  result: {
    tokenType: string;
    userId: number;
    accessToken: string;
    refreshToken: string;
    newUser: boolean;
  };
}
