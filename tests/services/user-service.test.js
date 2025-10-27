import { jest } from "@jest/globals";

// Use ESM-compatible mock loader
jest.unstable_mockModule("../../src/repository/user-repository.js", () => ({
  createUser: jest.fn(),
}));

// Dynamically import after mocking (important!)
const userRepo = await import("../../src/repository/user-repository.js");
const userService = await import("../../src/services/user-service.js");

describe("User Service Tests", () => {
  test("should create a user successfully", async () => {
    const data = { email: "abc@gmail.com", password: "abcd1234" };

    // Define mock behavior
    userRepo.createUser.mockReturnValue({
      ...data,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    });

    const response = await userService.createUser(data);
    expect(response.email).toBe(data.email);
  });
});
