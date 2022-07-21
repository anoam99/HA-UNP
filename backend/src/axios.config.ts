import axios from "axios";
import { config } from "./config";

const { UNIPASS_BASE_URL, UNIPASS_PRIVATE_KEY} = config

export const unipassClient = axios.create({
    baseURL: UNIPASS_BASE_URL, 
    headers: { Authorization: `Bearer ${UNIPASS_PRIVATE_KEY}`}
})