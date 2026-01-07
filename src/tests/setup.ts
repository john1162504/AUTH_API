// src/tests/setup.mts
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Compute __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load test env
dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret";
process.env.DATABASE_URL = process.env.DATABASE_URL_TEST;
