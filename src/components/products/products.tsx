
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GetServerSideProps, NextPageContext} from 'next'
import { IPrice, IProduct, IProducts } from 'src/types'
import styled from 'styled-components'

export const Products: React.FC<IProducts> = ({ products }) => {
  return(
    <Root>
      {products.map( product => (
        <div></div>
      ))}
    </Root>
  )
}

const Root = styled.div`
`