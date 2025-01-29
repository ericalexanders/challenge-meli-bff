export interface MercadoLibrePicture {
  id: string;
  secure_url: string;
}

export interface MercadoLibreShipping {
  free_shipping: boolean;
}

export interface MercadoLibreItemDetail {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  initial_quantity: number;
  available_quantity?: number;
  pictures: MercadoLibrePicture[];
  shipping: MercadoLibreShipping;
}

export interface TransformedItemDetail {
  author: {
    name: string;
    lastname: string;
  };
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    pictures: { secure_url: string }[];
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
}