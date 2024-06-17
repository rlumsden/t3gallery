// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";

// import { env } from "~/env";
import * as schema from "./schema";

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });
