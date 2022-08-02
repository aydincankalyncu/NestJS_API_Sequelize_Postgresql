import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'products', method: RequestMethod.GET },
        { path: 'products', method: RequestMethod.POST },
        'products/(.*)',
      )
      .forRoutes(ProductsController);
  }

}
