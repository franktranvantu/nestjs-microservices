import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  getById(id: number): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  create(product: any): Promise<Product> {
    return this.productRepository.save(product);
  }

  update(id: number, updateProduct: any): Promise<any> {
    return this.productRepository.update(id, updateProduct);
  }

  delete(id: number) {
    return this.productRepository.delete(id);
  }
}
