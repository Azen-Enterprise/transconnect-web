import React from 'react';
import styles from './card.module.scss';
 
interface props {
  subTitle: string,
  title: string,
  description: string,
  isLong?: boolean
}

export default function Card({title, description, subTitle, isLong}: props) {
  return (
    <div className={styles.card}>
      <div className={ `${isLong && styles.isLong} ${styles.card__top}`}>
        
      </div>
      <div className={styles.card__bottom}>
        <span className={styles.span}>{subTitle}</span>
        <h2 className='title'>{title}</h2>
        <p className={styles.card__text}>{description}</p>
      </div>
    </div>
  )
}
