const Employee = require("../static/js/Employee");

describe("Employee", () => {
  it("should be initialized", () => {
    const employee = new Employee("Fran", 1, "hello");

    const [testID, testName, testEmail, testRole] = [
      employee.getId(),
      employee.getName(),
      employee.getEmail(),
      employee.getRole(),
    ];

    const [expectID, expectName, expectEmail, expectRole] = [
      1,
      "Fran",
      "hello",
      "Employee",
    ];

    expect(employee).toBeInstanceOf(Employee);
    expect(testID).toEqual(expectID);
    expect(testName).toEqual(expectName);
    expect(testEmail).toEqual(expectEmail);
    expect(testRole).toEqual(testRole);
  });
});
