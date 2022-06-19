import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ContentContainer } from 'src/ui'
import styled from 'styled-components'
import { COLORS } from 'src/lib'
import { Products } from 'src/components';
import { axiosInstance } from 'src/utils';
import { IProduct } from 'src/types'
import { Card } from 'src/components'
 
const Home: NextPage = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <ContentContainer>
        <StyledHome>
          <h2>Get started with Gscore today!</h2>
          <CardsContainer>
            {products.map((product: IProduct) => (
              <Card 
                key={product.id}
                id={product.id}
                sitesCount={product.sitesCount}
                name={product.name}
                prices={product.prices}
              />
            )) }
          </CardsContainer>
          <p>Have more than 10 sites?</p>
          <Link href=""><a>Contact Us</a></Link>
        </StyledHome>
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

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 42px;
  a{
    color: ${COLORS.red}
  }
`
const CardsContainer= styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 48px 0 33px;
`
