import type { MercadoLibreResponse } from "../types/meliResponse";
import type { MercadoLibreItemDetail, TransformedItemDetail } from "../types/itemDetail";

export const transformResponse = (data: MercadoLibreResponse) => {
  return {
    author: {
      name: "Eric",
      lastname: "Saucedo",
    },
    categories: data.filters.find(
      (filter) => filter.id === "category"
    )?.values[0]?.path_from_root?.map((cat) => cat.name) || [],
    items: data.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: Number((item.price % 1).toFixed(2).split('.')[1]) || 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })),
  };
};

export const transformItemDetailResponse = (
  data: MercadoLibreItemDetail,
  description: string
): TransformedItemDetail => {
  return {
    author: {
      name: "Eric",
      lastname: "Saucedo",
    },
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: Math.floor(data.price),
        decimals: Number((data.price % 1).toFixed(2).split('.')[1]) || 0,
      },
      pictures: data.pictures.map((pic) => ({ secure_url: pic.secure_url })),
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.initial_quantity - (data.available_quantity ?? 0),
      description: description,
    },
  };
};