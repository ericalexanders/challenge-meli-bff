export interface MercadoLibreItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

export interface MercadoLibreFilter {
  id: string;
  name: string;
  values: {
    id: string;
    name: string;
    path_from_root?: { id: string; name: string }[];
  }[];
}


export interface MercadoLibreResponse {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: MercadoLibreItem[];
  filters: MercadoLibreFilter[];
}