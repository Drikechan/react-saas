export interface Result {
  code: number;
  message: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
}

export interface CollapseIconType {
  isCollapse?: boolean;
  updateCollapse: (e: boolean) => {
    type: string;
    isCollaspe: boolean;
  };
}
