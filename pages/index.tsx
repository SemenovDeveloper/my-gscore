import type { NextPage } from 'next'
import Head from 'next/head'
import { ContentContainer } from 'src/ui'
 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <ContentContainer>
        <div>Content</div>
      </ContentContainer>
    </>  
  )
}
export default Home

