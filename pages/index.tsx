import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Landing, About, HowTo } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Landing />
        <About />
        <HowTo />
      </main>
    </div>
  )
}

export default Home
