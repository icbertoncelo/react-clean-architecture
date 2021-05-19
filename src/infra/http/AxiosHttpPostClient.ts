import axios, { AxiosResponse } from 'axios';
import {
  IHttpPostParams,
  IHttpPostClient,
} from '../../data/protocols/IHttpPostClient';

export class AxiosHttpPostClient implements IHttpPostClient {
  async post({ url, body, headers }: IHttpPostParams): Promise<any> {
    let axiosResponse: AxiosResponse;

    try {
      const response = await axios.post(url, body, {
        headers,
      });

      axiosResponse = response.data;
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
