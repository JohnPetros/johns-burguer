import type { ICustomersController } from './ICustomersController'
import type { IOrdersController } from './IOrdersController'
import type { IProductsController } from './IProductsController'

export interface IApi
  extends ICustomersController,
    IProductsController,
    IOrdersController {}
