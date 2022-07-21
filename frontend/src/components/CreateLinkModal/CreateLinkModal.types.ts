import { Dispatch } from "react";
import { CreateCheckoutLinkDto } from "../../services";

export interface CreateLinkModalProps {
    formData: CreateCheckoutLinkDto
    setExecutePaymentReq: Dispatch<boolean>;
}