import type { NextPage } from 'next'
import Head from 'next/head'
import {Footer, Landing, About, HowTo} from '../components/'
import styles from '../styles/Home.module.scss'
import Book from './Book/Book'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <main className={styles.main}>
        <Book />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
