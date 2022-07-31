export interface LoginType {
  phoneNo: string;
  password: string;
  verificationCode: string;
  applicationId: number;
}

export interface ResponseType {
  code: number;
  message: string;
}
