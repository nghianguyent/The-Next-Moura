const publicRuntimeConfig = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    LOCALSTORAGE_TOKEN_NAME: 'token',
}

export const { NODE_ENV, REACT_APP_API_URL, LOCALSTORAGE_TOKEN_NAME } = publicRuntimeConfig

export default publicRuntimeConfig.NODE_ENV
