import { config as dotenvConfig } from "dotenv";
dotenvConfig();


export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT || 5000
};
