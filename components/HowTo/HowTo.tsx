import React from 'react';
import styles from './HowTo.module.scss';
import Image from 'next/image';
import Card from '../Card/Card';
import { useMediaQuery } from '@chakra-ui/react';

const feature = [
  {
    subTitle: 'SOFT LIFE FOR DI AH-SIDE',
    title: 'Your time on queues are over',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  },
  {
    subTitle: 'PAY INSIDE SIA',
    title: 'Pay from your device',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel  experience'
  },
  {
    subTitle: 'GERER ALL MAN',
    title: 'Book for yourself and others',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  },
  {
    subTitle: 'SOFT LIFE FOR DI AH-SIDE',
    title: 'Your time on queues are over',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  }
]

export default function HowTo() {
  const [isLessThan319] = useMediaQuery('(max-width: 319px)');

  return (
    <div className={styles.container}>
      <div className={styles.Howto}>
        <h2 className={`header ${styles.header}`}>How to Book a Trip</h2>
        <p className={styles.text}>This sections basically explain where and how users and potential users can download the app and how to manoeuvre their way around.</p>
        <div className={styles.Howto__tutorial}>
          <div className={styles.download}>
            <h3 className={styles.subheader}>Download the app</h3>
            <p className={styles.subtext}> This section is just designed to allow agencies,organisations, charities and other potential partners get in touch</p>
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
        <div className={styles.Features__main}>
          {feature.map((feature, i) => {
            if(i === 0 || i === 3) {
              return(
                <div key={i} className={styles.specialCards}>
                  <Card 
                    isLong={!isLessThan319}
                    subTitle={feature.subTitle} 
                    description={feature.description} 
                    title={feature.title} 
                  />
                </div>
              )
            } 
            return (
              <div key={i} className={styles.otherCards}>
                <Card 
                  subTitle={feature.subTitle} 
                  description={feature.description} 
                  title={feature.title} 
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
