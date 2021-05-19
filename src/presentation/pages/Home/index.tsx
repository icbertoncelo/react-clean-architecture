import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { Car } from '../../../domain/cars/models/Car';
import { ICreateCarDTO } from '../../../domain/cars/dtos/ICreateCarDTO';
import { IListCars } from '../../../domain/cars/usecases/IListCars';
import { ICreateCar } from '../../../domain/cars/usecases/ICreateCar';
import { IDeleteCar } from '../../../domain/cars/usecases/IDeleteCar';

import { CarCard } from '../../components/CarCard';

import styles from './styles.module.scss';
import { Input } from '../../components/Input';

interface HomeProps {
  listCars: IListCars;
  createCar: ICreateCar;
}

export const Home: React.FC<HomeProps> = ({ listCars, createCar }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [formData, setFormData] = useState<ICreateCarDTO>({
    name: '',
    model: '',
    color: '',
  });

  useEffect(() => {
    async function loadCarsData() {
      try {
        const carsData = await listCars.list();

        setCars(carsData);
      } catch (error) {
        console.log(error);
      }
    }

    loadCarsData();
  }, [listCars]);

  async function handleCreateCar(event: FormEvent) {
    event.preventDefault();

    try {
      const newCar = await createCar.create(formData);

      setCars((prevCars) => [...prevCars, newCar]);
      setFormData({
        name: '',
        model: '',
        color: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeFormData(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h1>Cadastro</h1>

          <form onSubmit={handleCreateCar}>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChangeFormData}
            />
            <Input
              type="text"
              placeholder="Cor"
              name="color"
              value={formData.color}
              onChange={handleChangeFormData}
            />
            <Input
              type="text"
              placeholder="Marca"
              name="model"
              value={formData.model}
              onChange={handleChangeFormData}
            />
            <button type="button" onClick={handleCreateCar}>Cadastrar</button>
          </form>
        </div>
        <div className={styles.list}>
          <ul>
            {cars.map((car) => (
              <CarCard key={car.id} data={car} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
