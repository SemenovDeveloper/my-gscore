import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ContentContainer } from 'src/ui'
import styled from 'styled-components'
import { COLORS } from 'src/lib'
import { Products } from 'src/components';
import { axiosInstance } from 'src/utils';
 
const Home: NextPage = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <ContentContainer>
        <StyledStart>
        <h2>Get started with Gscore today!</h2>
        <Products products={products}/>
        <p>Have more than 10 sites?</p>
        <Link href=""><a>Contact Us</a></Link>
      </StyledStart>
      </ContentContainer>
    </>  
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosInstance.get(`products`);
  
	if (!response) {
		return {
			notFound: true,
		}
	}

	return { props: { products: response.data } }
}

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a{
    color: ${COLORS.red}
  }
`


