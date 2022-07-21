import { Injectable } from '@nestjs/common';
import { unipassClient } from 'src/axios.config';
import { CreateCheckoutLinkDto } from './dto/create-checkout-link.dto';
import { UnipassCheckoutLinkEntity } from './entities/UnipassCheckoutLink.entity';




@Injectable()
export class UnipassService {
    async createCheckoutLink(createCheckoutLinkDto: CreateCheckoutLinkDto): Promise<UnipassCheckoutLinkEntity>  {
        return  (await unipassClient.post('/pay-ins/checkout', createCheckoutLinkDto)).data
    }
}
