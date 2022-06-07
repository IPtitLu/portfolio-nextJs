import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Portfolio - Lucas Perez</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <body>
        <p>Hello world !</p>
      </body>
    </div>
  )
}

export default Home
