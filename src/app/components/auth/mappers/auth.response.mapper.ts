import { ISignUpResponse } from '../entities/entities.auth';

export function MapperErrorAuthResponse(error: any): ISignUpResponse {
  return {
    errorCode: error.status,
    errorMessage: error.message,
    response: {
      userConfirmed: false,
      userSub: '',
    },
    success: false,
  };
}
