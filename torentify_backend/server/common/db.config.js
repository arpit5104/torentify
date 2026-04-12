import { Sequelize } from "sequelize";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // 🔥 Final override for local SSL issues

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_URL = process.env.DATABASE_URL;

// Force SSL options for cloud databases (Supabase/Aiven/Neon)
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    prepareThreshold: 0, // 🔥 Fix for Supabase 'cache lookup failed' error
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default sequelize;
