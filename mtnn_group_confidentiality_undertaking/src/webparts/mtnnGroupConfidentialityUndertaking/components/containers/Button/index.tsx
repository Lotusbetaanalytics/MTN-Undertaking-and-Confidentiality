import * as React from 'react';
import styles from './styles.module.scss';

const Button = ({ text, bg }) => {
  return (
    <button className={`${styles.btn} ${styles[bg]}`} disabled >{text}</button>
  )
};

export default Button;