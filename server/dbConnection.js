//todo: setup a pool to connect server with DB

import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

export const dbPool = new pg.Pool({
    connectionString: process.env.DB_URL, 
});