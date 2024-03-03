import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'wp3',
    password: 'wp3',
    port: 3306,
    database: 'companydb'
})