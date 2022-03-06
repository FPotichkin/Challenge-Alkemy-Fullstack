const HOST = 'http://localhost'
const PORT = ':8000'

const BASE_URL = `${HOST}${PORT}/api`

// auth routes
export const LOGIN_URL = `${BASE_URL}/auth/login` 
export const REGISTER_URL = `${BASE_URL}/auth/register`

// reports route
export const REPORT_URL = `${BASE_URL}/reports`

// operations route
export const OPERATIONS_URL = `${BASE_URL}/operations`

// categories route
export const CATEGORIES_URL = `${BASE_URL}/categories`