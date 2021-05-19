import { ICreateCar } from '../../domain/cars/usecases/ICreateCar';
import { Car } from '../../domain/cars/models/Car';
import { ICreateCarDTO } from '../../domain/cars/dtos/ICreateCarDTO';
import { IHttpPostClient } from '../protocols/IHttpPostClient';

export class RemoteCreateCar implements ICreateCar {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient,
  ) {}

  async create({ name, model, color }: ICreateCarDTO): Promise<Car> {
    const formData = {
      name,
      model,
      color,
    };

    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: formData,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return httpResponse;
  }
}
