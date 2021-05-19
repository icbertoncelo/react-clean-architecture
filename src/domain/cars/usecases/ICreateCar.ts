import { Car } from '../models/Car';
import { ICreateCarDTO } from '../dtos/ICreateCarDTO';

export interface ICreateCar {
  create(data: ICreateCarDTO): Promise<Car>;
}
