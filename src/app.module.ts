import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/orders/orders.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [OrdersModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
