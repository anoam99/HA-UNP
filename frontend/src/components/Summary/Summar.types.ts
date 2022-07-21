import { Dispatch } from "react"

export interface SummaryProps {
    total: string
    customerName: string
    currency: string
    description?: string
    setExecutePaymentReq: Dispatch<boolean>
}