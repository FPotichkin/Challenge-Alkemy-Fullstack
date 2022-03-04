const HOST = 'http://localhost'
const PORT = ':8000'

const BASE_URL = `${HOST}${PORT}/api`

// auth routes
export const LOGIN_URL = `${BASE_URL}/auth/login` 
export const REGISTER_URL = `${BASE_URL}/auth/register`