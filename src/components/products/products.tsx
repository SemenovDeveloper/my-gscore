
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GetServerSideProps, NextPageContext} from 'next'

interface IPrice {
  id: number,
  isActive: boolean,
  productId: number,
  price: string,
} 

interface IProduct {
  id: number,
  sitesCount: number,
  name: string,
  prices: IPrice[],
  upgrade?: boolean,
}

interface IProducts {
  products: IProduct[]
}

export const Products: React.FC<IProducts> = ({ products }) => {
  return(
    <div>
      Hello, products
      {products.map( product => <div key={product.id}>{product.id}</div>)}
    </div>
  )
}
