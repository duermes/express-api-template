import "dotenv/config";
import { DataSource } from "typeorm";

const PORT = process.env.DB_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;
const HOST = process.env.DB_HOST;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: [Example],
  subscribers: [],
  migrations: [],
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.SSL_CERT,
  },
});
