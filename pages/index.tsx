import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Container } from 'src/ui'
 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Container><><h1>Home text</h1></></Container>
    </>  
  )
}
export default Home

