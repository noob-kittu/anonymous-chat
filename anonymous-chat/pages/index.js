import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anonymous Chat</title>
        <meta name="description" content="it's an anonymous chatting application where stranger connect to users without revealing their personal information. Anonymous chat not store users data for any kind for worst activity to earn money." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Anonymous Chat
        </h1>

      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            Anonymous Chat
          </span>
      </footer>
    </div>
  )
}
