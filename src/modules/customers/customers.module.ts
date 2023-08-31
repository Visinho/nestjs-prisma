import { Module } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { CustomersService } from './customers.service';

@Module({
    imports: [PrismaModule],
    providers: [CustomersRepository, CustomersService],
    exports: [CustomersService]
})
export class CustomersModule {}
