export interface IPrice {
  id: number,
  isActive: boolean,
  productId: number,
  price: string,
} 

export interface IProduct {
  id: number,
  sitesCount: number,
  name: string,
  prices: IPrice[],
  upgrade?: boolean,
}

export interface IProducts {
  products: IProduct[]
}