export class User {
  userName: string;
  userPassword: string;
  userEmail: string;

  constructor(userName: string, userPassword: string, userEmail: string) {
    this.userEmail = userEmail;
    this.userName = userName;
    this.userPassword = userPassword;
  }

  private registerUser() {}
}

export interface IGenericUserRequest {
  name: string;
  userName: string;
  email: string;
  password: string;
}

export interface IChangePasswordRequest {
  userInformation: IGenericUserRequest;
  newPassword: string;
}

export interface IVerify2FATokenRequest {
  accessToken: string;
  friendlyDeviceName: string;
  session: string;
  userCode: string;
}

export interface IResponse2FAChallengeRequest {
  challengeName: string;
  session: string;
  userName: string;
  token2FA: string;
}

export interface IForgotPasswordRequestCode {
  userName: string;
}

export interface ISignUpResponse {
  errorCode: number;
  errorMessage: string;
  success: boolean;
  response: {
    userConfirmed: boolean;
    userSub: string;
  };
}

export interface IVerifyUserResponse {
  success: boolean;
  response: boolean;
}
