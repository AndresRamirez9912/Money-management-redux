export interface authState {
  isLogged: boolean;
  session: string;
  hasTwoFactor: boolean;
  userName: string;
  userConfirmed: boolean;
  userEmail: string;
  errorMessage: string;
  errorCode: number;
  isLoading: boolean;
  accessToken: string;
  IdToken: string;
}
