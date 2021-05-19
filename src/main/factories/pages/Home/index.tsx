import React from 'react';
import { RemoteListCars } from '../../../../data/usecases/RemoteListCar';
import { RemoteCreateCar } from '../../../../data/usecases/RemoteCreateCar';
import { AxiosHttpGetClient } from '../../../../infra/http/AxiosHttpGetClient';
import { AxiosHttpPostClient } from '../../../../infra/http/AxiosHttpPostClient';

import { Home } from '../../../../presentation/pages/Home';

export const HomeFactory: React.FC = () => {
  const baseUrl = process.env.REACT_APP_API_URL as string;

  const axiosHttpGetClient = new AxiosHttpGetClient();
  const axiosHttpPostClient = new AxiosHttpPostClient();

  const remoteListCar = new RemoteListCars(
    `${baseUrl}/cars`,
    axiosHttpGetClient,
  );
  const remoteCreateCar = new RemoteCreateCar(
    `${baseUrl}/cars`,
    axiosHttpPostClient,
  );

  return <Home listCars={remoteListCar} createCar={remoteCreateCar} />;
};
