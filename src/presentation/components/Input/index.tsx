import React, { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => (
  <input className={styles.container} {...rest} />
);
