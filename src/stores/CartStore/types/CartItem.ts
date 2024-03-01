import type { Product } from "../../../@types/Product";

export type CartItem = Pick<Product, 'id' | 'name' | 'price'> &
{ quantity: number, condiment: Record<string, string> }