import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load CA certificate
const caCert = fs.readFileSync(
  path.join(__dirname, "../certs/ca.pem")
);
const DATABASE_URL = process.env.DATABASE_URL;


const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      ca: caCert   // 🔥 THIS IS THE REAL FIX
    }
  }
});

export default sequelize;
