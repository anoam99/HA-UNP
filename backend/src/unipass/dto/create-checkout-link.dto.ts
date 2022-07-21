import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"


export class CreateCheckoutLinkDto {
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount: number

    @IsString()
    @IsNotEmpty()
    currency: string

    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    firstName: string
}
