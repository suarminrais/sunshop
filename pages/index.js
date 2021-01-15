import Head from 'next/head'
import Navbar from '../components/navbar/navbar.component'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Navbar/>
      </main>

      <footer >
      </footer>
    </div>
  )
}
