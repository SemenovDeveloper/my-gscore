import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { MainContainer } from 'src/components'
 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <MainContainer>
        <h1>Home text</h1>
      </MainContainer>
    </>  
  )
}
export default Home

