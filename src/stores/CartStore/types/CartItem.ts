import type { Product } from "../../../@types/Product";

export type CartItem = Product & { quantity: number, condiment: Record<string, string> }