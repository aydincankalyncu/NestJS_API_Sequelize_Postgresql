import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, UseFilters } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateProductDto } from 'src/products/dtos/CreateProductDto';
import { Request } from 'express';
import { ProductsService } from './products.service';
import { Product } from 'src/products/interfaces/product.interface';
// import { HttpExceptionFilter } from 'src/notes/common/exception/http-exception.filter';

@Controller('products')
// @UseFilters(new HttpExceptionFilter())
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    
    async create(@Body() createProductDto: CreateProductDto){
        throw new ForbiddenException();
        //this.productService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<Product[]>{
        //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error:'This is a custom message',
        // }, HttpStatus.FORBIDDEN);
        throw new ForbiddenException();
        //return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number){
        return this.productService.findOne(id);
    }
}
