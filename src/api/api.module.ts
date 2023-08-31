import { Module } from '@nestjs/common';
import { OrdersModule } from 'src/modules/orders/orders.module';
import { ApiController } from './api.controller';

@Module({
    imports: [OrdersModule],
    controllers: [ApiController]
})
export class ApiModule {}
