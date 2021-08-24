const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }
}

module.exports = Manager;
