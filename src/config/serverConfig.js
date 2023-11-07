import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const SALT = bcrypt.genSaltSync(10);
export const JWT_SECRET = process.env.JWT_SECRET;
