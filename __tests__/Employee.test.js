const Employee = require("../src/Employee.js");

describe("Employee", () => {
  it("should be initialized", () => {
    const employee = new Employee("Fran", 1, "hello");

    expect(employee).toBeInstanceOf(Employee);
  });
});
