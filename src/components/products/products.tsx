
const axios = require('axios').default;

interface Price {
  id: number,
  isActive: boolean,
  productId: number,
  price: string,
} 

interface Product {
  id: number,
  sitesCount: number,
  name: string,
  prices: Price[],
  upgrade?: boolean,
}



const baseURL = 'https://gscore-back.herokuapp.com/api/products'

// const instance = axios.create({ baseURL })


export const Products: React.FC = () => {
  let products: Product[]

  axios.get('https://gscore-back.herokuapp.com/api/products')
    .then(function (response: any) {
      console.log(response.data)
      products = response.data
      console.log(products)
    })
    .catch(function (error: Error) {
      console.log(error);
    })

  return(
    <div>
      <h2>Products</h2>
      {/* {products.map( product => <div>{product.id}</div>)} */}
    </div>
  )
}
