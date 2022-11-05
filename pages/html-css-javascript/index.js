import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HTML5 + CSS + Js book review</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Header title="HTML5 + CSS3 + JavaScript로 배우는 웹프로그래밍 기초 by Hwang Ki Tae" />
        
        <Link href='/html-css-javascript/chapter/1'> Chapter 1</Link>
        
      </main>

      <Footer />
    </div>
  )
}
