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

export interface MenuList {
  code?: string;
  icon?: string;
  functionCodeVOList?: MenuList[] | null;
  id: number;
  name?: string;
  parentId?: number;
  type?: string;
}
