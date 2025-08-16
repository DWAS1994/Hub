import { defineConfig } from "drizzle-kit";
import path from "path";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL is not set. Make sure your database is provisioned and the environment variable is configured.");
}

export default defineConfig({
  schema: path.resolve(__dirname, "./shared/schema.ts"),
  out: path.resolve(__dirname, "./migrations"),
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
