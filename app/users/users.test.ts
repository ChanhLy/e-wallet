import { describe, test, expect } from "vitest";
import { createUser, getAllUsers, getUserById } from "./users";

describe("Users", () => {
  // test("getUserById", () => {
  //     getUserById("");
  // })

  test("createUser", async () => {
    const user = await createUser({
      email: "test@email.com",
      name: "test",
      age: 10,
    });
  });
});
