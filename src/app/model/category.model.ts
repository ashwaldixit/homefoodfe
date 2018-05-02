import { Product } from './product.model'


export class Category {
    catererid: number

    name: string

    createdDate: Date


    lastModifiedDate: Date


    recordStatus: string


    products: Product[]


    version: Number
}