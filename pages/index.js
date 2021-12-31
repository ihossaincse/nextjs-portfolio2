import Head from 'next/head'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Works from '../components/Works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
