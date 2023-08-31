import { CustomersService } from './../modules/customers/customers.service';
import { Controller, Body, Get, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
    constructor(private readonly customersService: CustomersService) {}

    @Post("customer")
    async createTweet(@Body() data: { username: string }) {
      const { username } = data;
      return this.customersService.createCustomer({
        username,
      });
    }
  
    @Get('tweets')
    getTweets() {
      return this.customersService.getCustomers();
    }
}