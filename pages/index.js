import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KC Book Review</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Header title="Book Review" />
      
        <Link href='/html-css-javascript'>HTML5 + CSS3 + JavaScript로 배우는 웹프로그래밍 기초</Link>
      </main>

      <Footer />
    </div>
  )
}
