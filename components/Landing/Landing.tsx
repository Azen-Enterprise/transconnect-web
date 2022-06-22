import React from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image'

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.Landing__left}>
        <h1 className={styles.Landing__header}>Skip the line, Book online</h1>
        <div className={styles.Landing__action}>
          <button className={styles.Landing__actionButton}>
            <Image className={styles.Landing__actionButton} src={require('../../assets/Google_play.png')} alt="Landing Image"/>
          </button>
          <button className={styles.Landing__actionButton}>
            <Image className={styles.Landing__actionButton} src={require('../../assets/Google_play.png')} alt="Landing Image"/>
          </button>
        </div>
      </div>
      <div className={styles.Landing__right}>
        <Image   
          src={require('../../assets/landing_image.png')} 
          alt="Landing Image"
          width={1000}
          height={1200}
        />
      </div>

    </div>
  )
}
