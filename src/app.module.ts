import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { logger } from './notes/common/middleware/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './users/entities/entities';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: entities,
      synchronize: true
    }),
    inject: [ConfigService]
  }),
    ProductsModule, UsersModule
  ],
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
