import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { db, Product } from './../db';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }
  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }
  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    this.productsService.deleteById(id);
    return { success: true };
  }
  @Post('/')
  create(@Body() productData: Omit<Product, 'id'>) {
    return this.productsService.create(productData);
  }
}