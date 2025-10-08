import { create } from "zustand";

export interface Product {
    title: string,
    id: number,
    thumbnail: string,
    price: number,
    category: string,
    qt: number
}
interface ProudctType {
    products: Product[],
    cart: Product[],
    getAll: () => Promise<void>,
    addToCart: (data: Product) => void,
    deleteCart: (id: number) => void
}
export const useProductStore = create<ProudctType>((set, get) => ({
    products: [],
    cart: [],
    getAll: async () => {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        console.log(data);
        set({ products: [...data.products] });
    },
    addToCart: (data: Product) => {
        set({ cart: [...get().cart, data] });
    },
    deleteCart: (id) => {

    },
}))