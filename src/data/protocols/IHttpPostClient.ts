export interface IHttpPostParams {
  url: string;
  body?: any;
  headers?: {
    [key: string]: string;
  };
}

export interface IHttpPostClient {
  post: (params: IHttpPostParams) => Promise<any>;
}
