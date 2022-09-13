import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Card  = ({ Icon, title, link }) => {
  return (
    <Link to={link}>
        <div className={styles.card}>
            <div>
                <p><Icon /></p>
                <small>{title}</small>
            </div>  
        </div>
    </Link>
  )
}

export default Card;