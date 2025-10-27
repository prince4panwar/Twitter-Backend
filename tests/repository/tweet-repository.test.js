import Tweet from "../../src/models/tweet.js";
import { jest } from "@jest/globals";

jest.mock("../../src/models/tweet.js");

describe("Tweet Repository Tests", () => {
  beforeEach(() => {
    // Mock implementation for Tweet.create
    Tweet.create = jest
      .fn()
      .mockResolvedValue({ id: 1, content: "mock tweet" });
  });

  test("actually calling model", async () => {
    const data = { content: "bigggggg..." };
    const tweet = await Tweet.create(data);

    expect(Tweet.create).toHaveBeenCalledWith(data);
    expect(tweet).toEqual({ id: 1, content: "mock tweet" });
  });
});
