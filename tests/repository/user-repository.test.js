import { jest } from "@jest/globals";
import { createUser } from "../../src/repository/user-repository.js";
import User from "../../src/models/user.js";

// Mock the User model
jest.mock("../../src/models/user.js");

describe("User Repository Tests", () => {
  test("should create a user successfully", async () => {
    const mockData = { name: "Prince", email: "prince@example.com" };
    const mockUser = {
      _id: "123",
      createdAt: "22-2-2025",
      updatedAt: "23-2-2025",
      ...mockData,
    };

    const spy = jest.spyOn(User, "create").mockImplementation(() => mockUser);
    const result = await createUser(mockData);

    expect(result).toBe(mockUser);
  });

  test("should throw an error if creation fails", async () => {
    const mockData = { name: "ErrorUser" };
    const mockError = new Error("Database error");

    User.create.mockRejectedValue(mockError);

    await expect(createUser(mockData)).rejects.toThrow("Database error");
  });
});
