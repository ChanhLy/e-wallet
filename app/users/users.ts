import { eq } from "drizzle-orm";
import { db } from "~/database/db";
import { usersTable } from "./users.schema";

export async function getUserById(userId: string) {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, userId));

  return user;
}

export async function getAllUsers() {
  const users = await db.select().from(usersTable);

  return users;
}

export async function createUser(user: typeof usersTable.$inferInsert) {
  await db.insert(usersTable).values(user);

  const newUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, user.email));

  return newUser;
}
