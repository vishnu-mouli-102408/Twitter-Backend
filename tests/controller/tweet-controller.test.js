import { getWithComments } from "../../src/controllers/tweet-controller.js";
import TweetService from "../../src/services/tweet-service.js";
import { mockRequest, mockResponse } from "../mocker.js";

jest.mock("../../src/services/tweet-service.js");

describe("Controller getTweetsWithComments Tests", () => {
  test("Should get all Tweets with comments", async () => {
    const res = mockResponse();
    const req = mockRequest();
    const response = [
      {
        content: "this is Tweet",
      },
      {
        content: "This is another Tweet",
      },
    ];
    TweetService.prototype.getWithComments.mockReturnValue(response);
    await getWithComments(req, res);
    expect(res.json).toHaveBeenCalledWith({
      data: response,
      success: true,
      message: "Successfully Fetched a tweets",
      err: {},
    });
  });
});
