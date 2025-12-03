import React, { useContext } from 'react';
import styles from './Button.module.css';
import { ButtonContext } from '@/types/ButtonContext';

// type Props = {
//   // children: React.ReactNode;
//   children?: string;
//   onClick1?: () => void;
// };

export default function Button() {
  const { text, onClick } = useContext(ButtonContext);

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.button}>
        <div className={styles.buttonText}>{text}</div>
      </div>
    </div>
  );
}
