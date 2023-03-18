import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>tylab.dev</div>
        <p className={styles.findMe}><a href='https://github.com/tysonwu' target='blank'>Find me on GitHub</a></p>
      </div>
    </main>
  )
}

export default Home
