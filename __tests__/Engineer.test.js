const Engineer = require("../lib/js/Engineer");
const Employee = require("../lib/js/Employee");

const name = "Quackles";
const id = 400;
const email = "developer@somewhere.com";
const github = "QuacklesTheMagnificent";

const engineer = new Engineer(name, id, email, github);

describe("Engineer", () => {
  it("should be of type engineer", () => {
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it("should extend Employee", () => {
    expect(engineer).toBeInstanceOf(Employee);
  });

  it("should have an officeNumber property", () => {
    expect(engineer).toHaveProperty("github");
  });

  it("should have a role of Engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });

  it("should have a getGithub() method", () => {
    expect(engineer.getGithub()).toEqual(github);
  });
});
