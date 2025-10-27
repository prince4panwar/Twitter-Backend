import { jest } from "@jest/globals";
import { mockRequest, mockResponse } from "../mocker.js";

// Mock before importing anything that depends on it
jest.unstable_mockModule("../../src/services/tweet-service.js", () => ({
  getTweet: jest.fn(),
}));

// Dynamically import after mocking
const tweetService = await import("../../src/services/tweet-service.js");
const tweetController = await import(
  "../../src/controller/tweet-controller.js"
);

describe("Tweet Controller Tests", () => {
  test("should create a tweet successfully", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [{ content: "Tweet 1" }, { content: "Tweet 2" }];

    tweetService.getTweet.mockReturnValue(response);

    await tweetController.getTweet(req, res);

    expect(res.json).toHaveBeenCalledWith({
      data: response,
      success: true,
      err: {},
      message: "Tweet is fetched successfully",
    });
  });
});
