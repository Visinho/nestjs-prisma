import { Module } from '@nestjs/common';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { ApiController } from './api.controller';

@Module({
    imports: [CustomersModule],
    controllers: [ApiController]
})
export class CustomerApiModule {}
