import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema';
// import { drizzle } from 'drizzle-orm/node-postgres';

// export const client = new PGlite(process.env.DATABASE_URL!);
export const client = new PGlite("");
export const db = drizzle({ client, schema });
// export const database = drizzle(process.env.DATABASE_URL!);
