import React from 'react';
import { Car } from '../../../domain/cars/models/Car';

import styles from './styles.module.scss';

interface CarCardProps {
  data: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ data }: CarCardProps) => (
  <li className={styles.container}>
    <p>{data.name} {data.color} - {data.model}</p>
  </li>
);
