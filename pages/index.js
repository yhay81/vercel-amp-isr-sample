import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AMP with ISR example.{' '}
          <a href='https://github.com/yhay81/vercel-amp-isr-sample'>GitHub</a>
        </h1>

        <div className={styles.grid}>
          <a href='/isr/1' className={styles.card}>
            <h3>/isr/1 &rarr;</h3>
            <p>Go to non AMP page.</p>
          </a>

          <a href='/isr/1?amp=1' className={styles.card}>
            <h3>/isr/1?amp=1 &rarr;</h3>
            <p>Go to AMP page.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
