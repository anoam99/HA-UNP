import { UnipassCheckoutRes } from "../../services"

export interface SuccessProps {
    unipassCheckoutRes: UnipassCheckoutRes
    handleReset: () => void
}

export type SocialLinksArray = SocialLink[]

export type SocialLink = {
    id: string
    label: string
    icon: JSX.Element
}