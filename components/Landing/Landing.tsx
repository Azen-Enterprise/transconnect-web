import React from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image'
import { Box, Img, useMediaQuery } from '@chakra-ui/react';

export default function Landing() {
  const [isLessThan1012] = useMediaQuery('max-width: 1012px');

  return (
    <div className={styles.Landing}>
      <div className={styles.Landing__left}>
        <h1 className={styles.Landing__header}>Skip the line,<br /> Book online</h1>
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
          layout='intrinsic'
          objectFit='contain'
          width={isLessThan1012 ? 200 : 600}
          height={isLessThan1012 ? 200 : 1000}
        />
      </div>

    </div>
  )
}
