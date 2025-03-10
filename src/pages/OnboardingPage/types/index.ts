export interface LoginResponseTypes {
  result: {
    tokenType: string;
    userId: number;
    accessToken: string;
    refreshToken: string;
    newUser: boolean;
  };
}
