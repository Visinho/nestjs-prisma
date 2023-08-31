import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/orders/orders.module';
import { ApiModule } from './api/api.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CustomerApiModule } from './customer-api/customer-api.module';

@Module({
  imports: [OrdersModule, ApiModule, CustomersModule, CustomerApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
