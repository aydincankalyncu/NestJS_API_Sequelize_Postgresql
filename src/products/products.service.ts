import { Injectable } from '@nestjs/common';
import { logger } from 'src/common/middleware/logger.middleware';
import { Product } from 'src/products/interfaces/product.interface';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];

    create(product: Product){
        this.products.push(product);
    }

    findAll(): Product[]{
        return this.products;
    }

    findOne(id: number): Product{
        return this.products.find((product) =>{
            return product.id === id;
        });
    }


}
