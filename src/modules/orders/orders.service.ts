import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Customer, Order } from '@prisma/client';

@Injectable()
export class OrdersService {
    constructor(private repository: OrdersRepository) {}

    async createTweet(params: { title: Order[`title`]; customerId: Customer[`id`]; writer: Order[`writer`]; coverImage: Order[`coverImage`]; price: Order[`price`]; tag: Order[`tag`]; status: boolean; }) {
        const { title, customerId, writer, coverImage, price, tag, status} = params;
    
        // call repository layer
        const tweet = await this.repository.createOrder({
          data: {
            title, writer, coverImage, price, tag, status,
            customer: {
              connect: {
                id: customerId,
              },
            },
          },
        });
    
        return tweet;
      }

      async getOrders() {
        const orders = await this.repository.getOrders({});
        return orders;
      }
}