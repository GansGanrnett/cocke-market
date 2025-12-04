import React from 'react';
import Button from '@/components/ui/Button/Button';
import styles from './Card.module.css';
import { ICardProps } from '@/types/TCardProps';

export default function Card({ id, title, img, description, price }: ICardProps) {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.img} />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTitle}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.body}>
          <h3 className={styles.bodyTitle}>{price}</h3>
          <Button />
        </div>
      </div>
    </div>
  );
}
