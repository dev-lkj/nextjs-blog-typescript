import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import { getStortedPostsDate } from '@/lib/post'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home( {allPostsData} : {
  allPostsData : {
    date: string
    title: string
    id: string
  }[]
} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tony Lee Blog</title>        
      </Head>
      <section className={styles.headingMd}>
        <p>[Tony Lee Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map( ({id, date, title}) => 
          <li className={styles.listItem}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className={styles.lightText}>
              {date}
            </small>
          </li>
        )}

        </ul>
      </section>
    </div>
  )
}
 

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getStortedPostsDate();
  return {
      props: {
        allPostsData
      }
    }
}