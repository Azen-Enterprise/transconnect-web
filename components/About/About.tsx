import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.About__left}>
        <div className={styles.About__imageContainer}>
          <Image src={require('../../assets/about_image.png')} alt="About Image"/>
        </div>
      </div>
      <div className={styles.About__right}>
        <h2 className='header'> About TransApp </h2>
        <p className={styles.About__text}>
          This is where users and other interested parties can 
          learn about TransApp as a company, its products and 
          values, team and structure, partners and prospects, 
          business wins, actions towards corporate social, 
          ethical and environmental responsibilities.
        </p>
        <button className={`btn btn__primary ${styles.About__btn}`}>
          Book a Trip
        </button>
      </div>
    </div>
  )
}
