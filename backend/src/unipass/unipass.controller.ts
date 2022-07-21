import { Body, Controller, Post } from '@nestjs/common';
import { CreateCheckoutLinkDto } from './dto/create-checkout-link.dto';
import { UnipassService } from './unipass.service';

@Controller('unipass')
export class UnipassController {
    constructor(private readonly unipassService: UnipassService) {}

    @Post('checkout')
    async GenerateCheckoutLink(@Body() createCheckoutLinkDto: CreateCheckoutLinkDto) {
       return await this.unipassService.createCheckoutLink(createCheckoutLinkDto)
    }
}
