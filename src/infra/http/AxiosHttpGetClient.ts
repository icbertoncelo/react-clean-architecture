import axios, { AxiosResponse } from 'axios';
import {
  IHttpGetClient,
  IHttpGetParams,
} from '../../data/protocols/IHttpGetClient';

export class AxiosHttpGetClient implements IHttpGetClient {
  async get({ url }: IHttpGetParams): Promise<any> {
    let axiosResponse: AxiosResponse;

    try {
      const response = await axios.get(url);

      axiosResponse = response.data;
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
