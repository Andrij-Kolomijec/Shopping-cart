export type StoreItem = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  quantity?: number;
};

type FetchError = {
  code: number;
  info: string;
};

export default async function fetchStoreItems(): Promise<StoreItem[]> {
  const url = "https://fakestoreapi.com/products/";

  const response = await fetch(url);

  if (!response.ok) {
    const error: FetchError = {
      code: response.status,
      info: "An error occurred while fetching store items.",
    };
    throw error;
  }

  const storeItems: StoreItem[] = await response.json();

  return storeItems;
}
