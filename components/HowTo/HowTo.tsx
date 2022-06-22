import React from 'react';
import styles from './HowTo.module.scss';
import Image from 'next/image'

export default function HowTo() {
  return (
    <div className={styles.container}>
      <div className={styles.Howto}>
        <h2 className={`header ${styles.header}`}>How to Book a Trip</h2>
        <p className={styles.text}>This sections basically explain where and how users and potential users can download the app and how to manoeuvre their way around.</p>
        <div className={styles.Howto__tutorial}>
          <div className={styles.download}>
            <h3 className={styles.subheader}>Download the app</h3>
            <p className={styles.subtext}> This section is just designed to allow agencies, organisations, charities and other potential partners get in touch</p>
          </div>
          <div className={styles.book}>
            <h3 className={styles.subheader}>Book a trip</h3>
            <p className={styles.subtext}>This section is just designed to allow agencies, organisations, charities and other potential partners get in touch</p>
          </div>
          <div className={styles.checkIn}>
            <h3 className={styles.subheader}>Check-in &amp; Go</h3>
            <p className={styles.subtext}> This section is just designed to allow agencies, organisations, charities and other potential partners get in touch</p>
            <button className={`btn btn__primary ${styles.Howto__btn}`}>
              Book a Trip
            </button>
          </div>
          <Image width={800} height={1400} src={require('../../assets/howto_image.png')} alt="Tutorial"/>
        </div>
      </div>
      <div className={styles.Features}>
        <h2 className={`header ${styles.header}`}>Features</h2>
        <p className={styles.text}>This sections basically explain where and how users and potential users can download the app and how to manoeuvre their way around.</p>
      </div>
    </div>
  )
}
