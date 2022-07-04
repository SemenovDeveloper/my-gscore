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

export interface ICode {
  id: number;
  code: string;
  origin: string | null;
  status: string;
  subscribeId: number;
  userId: number;
}

export interface ISubscription {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
  product: IProduct;
  codes: ICode[];
}

