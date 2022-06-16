import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { ContentContainer } from 'src/ui'
 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <ContentContainer>
        <div>Dream</div>
      </ContentContainer>
    </>  
  )
}
export default Home

