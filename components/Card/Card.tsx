import React from 'react';
import styles from './card.module.scss';
 
interface props {
  title: string,
  description: string
}

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        
      </div>
      <div className={styles.card__bottom}>
        <span className={styles.span}> Gerer all man</span>
        <h2 className='title'>
          Book for yourself and others
        </h2>
        <p className={styles.card__text}>
          A quick summary of how downloading the mobile app can boost the user’s travel planning experience
        </p>
      </div>
    </div>
  )
}
