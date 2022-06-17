import type { NextPage } from 'next'
import Head from 'next/head'
import { ContentContainer } from 'src/ui'
import { Start } from 'src/components'
 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <ContentContainer>
        <Start />
      </ContentContainer>
    </>  
  )
}
export default Home

