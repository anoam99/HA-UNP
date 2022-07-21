const {REACT_APP_BACKEND_ENDPOINT} = process.env

if(!REACT_APP_BACKEND_ENDPOINT) {
    throw new Error('Env vars are missing!')
}

export const config = {
    REACT_APP_BACKEND_ENDPOINT
}