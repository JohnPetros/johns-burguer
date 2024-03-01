import type { Product } from "../../../@types/Product"

export interface IProductsController {
  getAllProducts(): Promise<Product[]>
  getProductBySlug(slug: string): Promise<Product>
}