import type { Category } from "../../@types/Category";
import type { Product } from "../../@types/Product";
import { Api } from "../../services/api";

function getProductsByCategory(products: Product[], category: Category) {
  return products.filter((product) => {
    return product.category === category
  })
}

export async function _getProducts() {
  const allProducts = await Api().getAllProducts()

  const productsByCategory = {
    burguers: getProductsByCategory(allProducts, 'burguer'),
    drinks: getProductsByCategory(allProducts, 'drink'),
    deserts: getProductsByCategory(allProducts, 'desert')
  }

  return productsByCategory
}  