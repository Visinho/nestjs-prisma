import { Order, Customer } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';

@Injectable()
export class CustomersService {
    constructor(private repository: CustomersRepository) {}

    async createCustomer(params: { username: Customer[`username`] }) {
        const { username } = params;
    
        // call repository layer
        const customer = await this.repository.createCustomer({
          data: {
            username,
          },
        });
    
        return customer;
      }
    
      async getCustomers() {
        const customers = await this.repository.getCustomers({});
        return customers;
      }
    }
