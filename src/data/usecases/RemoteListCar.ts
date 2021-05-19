import { IListCars } from '../../domain/cars/usecases/IListCars';
import { Car } from '../../domain/cars/models/Car';
import { IHttpGetClient } from '../protocols/IHttpGetClient';

export class RemoteListCars implements IListCars {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpGetClient,
  ) {}

  async list(): Promise<[Car]> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
    });

    return httpResponse;
  }
}
