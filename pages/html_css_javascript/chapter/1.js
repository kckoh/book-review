import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Chapter1() {
  return (
    <div className="container">
      <Head>
        <title>chapter 1</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Header title="Chapter1" />
        <p>chapter 1 </p>
        
        
      </main>

      <Footer />
    </div>
  )
}
