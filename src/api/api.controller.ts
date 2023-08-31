import { Controller, Body, Post, Get } from '@nestjs/common';
import { OrdersService } from 'src/modules/orders/orders.service';

@Controller('api')
export class ApiController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post("order")
    async createOrder(@Body() data: { title: string, customerId: string, writer: string, coverImage: string, price: string, tag: string, status: boolean }) {
        const { title, customerId, writer, coverImage, price, tag, status } = data;
        return this.ordersService.createOrder({
            title,
            customerId: Number(customerId),
            writer,
            coverImage,
            price,
            tag,
            status
        });
    }

    @Get("orders")
    getOrders() {
        return this.ordersService.getOrders();
    }
}