import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import SkillItems from '../components/skillls/SkillItems'
import Svg from '../public/symfony.svg';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Lucas Perez</title>
        <link rel="icon" href="/icon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> 
      </Head>
      <h1>Hello world !</h1>
      {/* <SkillItems />*/}
    </Fragment>
  )
}

export default Home
