import dotenv from 'dotenv'
dotenv.config()

const isDev: boolean = process.env.NODE_ENV === 'development'
export default isDev
