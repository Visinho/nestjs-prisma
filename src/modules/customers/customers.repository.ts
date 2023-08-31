import { Injectable } from '@nestjs/common';
import { Prisma, Customer } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CustomersRepository {
    constructor(private prisma: PrismaService) {}

    async createCustomer(params: { data: Prisma.CustomerCreateInput }): Promise<Customer> {
        const { data } = params;
        return this.prisma.customer.create({ data });
      }
    
      async getCustomers(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CustomerWhereUniqueInput;
        where?: Prisma.CustomerWhereInput;
        orderBy?: Prisma.CustomerOrderByWithRelationInput;
      }): Promise<Customer[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.customer.findMany({ skip, take, cursor, where, orderBy });
      }
    
      async updateCustomer(params: {
        where: Prisma.CustomerWhereUniqueInput;
        data: Prisma.CustomerUpdateInput;
      }): Promise<Customer> {
        const { where, data } = params;
        return this.prisma.customer.update({ where, data });
      }
    
      async deleteCustomer(params: {
        where: Prisma.CustomerWhereUniqueInput;
      }): Promise<Customer> {
        const { where } = params;
        return this.prisma.customer.delete({ where });
      }
}