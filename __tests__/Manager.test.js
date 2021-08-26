const Manager = require("../static/js/Manager");
const Employee = require("../static/js/Employee");

const name = "Boss";
const id = 20;
const email = "email@somewhere.com";
const number = 8508675309;

const manager = new Manager(name, id, email, number);

describe("Manager", () => {
  it("should be of type manager", () => {
    expect(manager).toBeInstanceOf(Manager);
  });

  it("should extend Employee", () => {
    expect(manager).toBeInstanceOf(Employee);
  });

  it("should have an officeNumber property", () => {
    expect(manager).toHaveProperty("officeNumber");
  });

  it("should have a role of Manager", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});
