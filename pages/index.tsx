import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Landing, About, HowTo } from '../components'

const Home: NextPage = () => {
  return (
    <div className='home'>
      <Landing />
      <About />
      <HowTo />
    </div>
  )
}

export default Home
