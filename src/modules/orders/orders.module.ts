import { Module } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [OrdersRepository, OrdersService],
    exports: [OrdersService]
})
export class OrdersModule {}
