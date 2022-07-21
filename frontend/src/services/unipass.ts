import { BackendClient } from "../axios.config"

export interface UnipassCheckoutRes {
    status: string
    id: string
    currency: string
    amount: string
    country: string
    expiresAt: string
    shortLink: string
    email: string
    firstName: string
    lastName: string
}

export interface CreateCheckoutLinkDto {
    amount: string
    currency: string
    country?: string
    email?: string
    firstName: string
    description?: string 
}

export const getCheckoutLink = async (createCheckoutLinkDto: CreateCheckoutLinkDto): Promise<UnipassCheckoutRes> => {
   return (await BackendClient.post('/unipass/checkout', createCheckoutLinkDto)).data
}