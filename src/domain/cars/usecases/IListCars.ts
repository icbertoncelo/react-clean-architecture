import { Car } from '../models/Car';

export interface IListCars {
  list(): Promise<[Car]>;
}
