import { TweetRepository } from "../../src/repository/index.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("Create Tweet Tests", () => {
  test("create tweet function and return tweet content", async () => {
    const data = {
      content: "This is my Tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "22-22-1234", updatedAt: "22-22-12345" };
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
  });

  test("Should not create and throw an error", () => {
    const data = {
      content: "Testing Tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Something went wrong");
    });

    const tweetRepository = new TweetRepository();
    const tweet = tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Something went wrong");
    });
  });
});

describe("getAll Tweet Tests", () => {
  test("testing limit for getting all tweets", async () => {
    const data = {
      content: "Testing Tweet",
    };

    const tweetArray = [
      { ...data, createdAt: "22-22-1234", updatedAt: "22-22-12345" },
      { ...data, createdAt: "22-22-1234", updatedAt: "22-22-12345" },
      { ...data, createdAt: "22-22-1234", updatedAt: "22-22-12345" },
    ];
    const findResponse = { tweetArray };
    findResponse.skip = jest.fn((offset) => findResponse);
    findResponse.limit = jest.fn((limit) =>
      findResponse.tweetArray.slice(0, limit)
    );

    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResponse;
    });

    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweets).toHaveLength(2);
  });
});
