import { migrate } from "drizzle-orm/pglite/migrator"
import { db } from "./db"

export async function applyMigrations() {
    await migrate(db, {
        migrationsFolder: "./drizzle/",
    });
}
console.log("Migration complete")
