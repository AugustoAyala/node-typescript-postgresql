import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "password",
  database: "taskapi",
  port: 5432,
});
