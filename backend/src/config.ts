const { UNIPASS_BASE_URL, UNIPASS_PRIVATE_KEY, PORT} = process.env

if(!UNIPASS_BASE_URL || !UNIPASS_PRIVATE_KEY || !PORT ) {
    throw new Error("missing env vars!")
}


export const config = {
    UNIPASS_BASE_URL, UNIPASS_PRIVATE_KEY, PORT
}