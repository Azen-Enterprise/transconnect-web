import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import {Footer} from '../components/'
import HowTo from '../components/HowTo/HowTo'
import Landing from '../components/Landing/Landing'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <main className={styles.main}>
        <Landing />
        <About />
        <HowTo />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
