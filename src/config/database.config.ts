import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default (): TypeOrmModuleOptions => ({
  type: 'postgres', // Database type
  host: process.env.DB_HOST, // Host
  port: parseInt(process.env.DB_PORT, 10), // Port
  username: process.env.DB_USERNAME, // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME, // Database name
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Path to entities
  migrations: [__dirname + '/../migrations/*{.ts,.js}'], // Path to migrations
  synchronize: true, // Disable in production
  logging: true, // Enable for debugging
});
