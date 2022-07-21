import axios from "axios"
import { config } from "./config"

const {REACT_APP_BACKEND_ENDPOINT} = config

export const BackendClient = axios.create({baseURL: REACT_APP_BACKEND_ENDPOINT  })