import { UserService } from "../../src/services/index.js";
import UserRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");
import bcrypt from "bcrypt";

describe("User Service Signup Test", () => {
  test("Should successfully Create a User", async () => {
    const data = {
      email: "1@2.com",
      password: "123456",
    };
    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "12-23-3456",
      updatedAt: "23-45-678",
    });

    const userService = new UserService();
    const response = await userService.signup();

    expect(response.email).toBe(data.email);
  });

  test("User Service compare password successfully", () => {
    const spy = jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);
    const userService = new UserService();
    const response = userService.comparePassword();
    expect(response).toBe(true);
  });

  test("User Service SignIn Test", async () => {
    const data = {
      email: "1@2gmail.com",
      password: "123456",
      name: "Mouli",
    };
    const token = "ahbhdbfkhbjrwy478r3ibjknfsdbof8gwbeafgic";
    UserRepository.prototype.getByEmail.mockReturnValue(data);
    UserService.prototype.comparePassword = jest.fn(() => true);
    UserService.prototype.generateJWTToken = jest.fn(() => token);
    const userService = new UserService();
    const response = await userService.signIn();
    expect(response).toBe(token);
  });
});
