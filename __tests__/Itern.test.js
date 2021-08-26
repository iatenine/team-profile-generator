const Intern = require("../static/js/Intern");
const Employee = require("../static/js/Employee");

const name = "Punk Kid";
const id = -6;
const email = "TheGreatest@apple.com";
const school = "FSU";

const intern = new Intern(name, id, email, school);

describe("Intern", () => {
  it("should be of type intern", () => {
    expect(intern).toBeInstanceOf(Intern);
  });

  it("should extend Employee", () => {
    expect(intern).toBeInstanceOf(Employee);
  });

  it("should have a school property", () => {
    expect(intern).toHaveProperty("school");
  });

  it("should have a getSchool() method", () => {
    expect(intern.getSchool()).toEqual(school);
  });
});
