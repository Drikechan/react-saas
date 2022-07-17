export interface LoginType {
  phoneNo: string;
  password: string;
  verificationCode: string;
  applicationId: number;
}

// interface ResponseCompanyListType {
//   id: number;
//   name: string;
//   selected: boolean;
// }

// interface ResponseDataType {
//   accessToken: string;
//   phoneNo: string;
//   userName: string;
//   companyList: ResponseCompanyListType[];
//   currentCompany: ResponseCompanyListType[];
// }

export interface ResponseType {
  code: number;
  message: string;
}
