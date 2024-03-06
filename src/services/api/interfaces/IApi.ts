import type { IOrdersController } from "./IOrdersController"
import type { IProductsController } from "./IProductsController"

export interface IApi extends IProductsController, IOrdersController { }