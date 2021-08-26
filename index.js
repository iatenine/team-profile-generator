const Manager = require("./static/js/Manager");
const Intern = require("./static/js/Intern");
const Engineer = require("./static/js/Engineer");
const GenerateHtml = require("./static/js/GenerateHtml");
const inquirer = require("inquirer");

const roles = [
  {
    role: "Manager",
    special: "office number",
    init: Manager,
  },
  {
    role: "Engineer",
    special: "gitHub",
    init: Engineer,
  },
  {
    role: "Intern",
    special: "school",
    init: Intern,
  },
];

const members = [];

function addMember(currentRole) {
  if (currentRole >= roles.length || currentRole < 0) {
    throw new Error("Invalid role index");
  }

  const questions = [
    {
      type: "input",
      message: `What is the ${roles[currentRole].role}'s name?`,
      name: "name",
    },
    {
      type: "number",
      message: `What is the ${roles[currentRole].role}'s Employee ID?`,
      name: "id",
      validate: (value) => {
        if (value < 0 || isNaN(value)) {
          return `Employee ID must be a number`;
        }
        return true;
      },
    },
    {
      type: "string",
      message: `What is the ${roles[currentRole].role}'s email address?`,
      name: "email",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return "Enter a valid email address.";
      },
    },
    {
      type: "string",
      message: `What is the ${roles[currentRole].role}'s ${roles[currentRole].special}?`,
      name: "special",
      validate: (answer) => {
        if (currentRole === 0 && isNaN(answer)) {
          return "Office Number must be a number";
        }
        return true;
      },
    },
    {
      type: "list",
      message: "Add an additional team member?",
      name: "next",
      choices: ["ENGINEER", "INTERN", "DONE"],
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const newEmployee = new roles[currentRole].init(
      answers.name,
      answers.id,
      answers.email,
      answers.special
    );
    members.push(newEmployee);
    switch (answers.next) {
      case "ENGINEER":
        addMember(1);
        break;
      case "INTERN":
        addMember(2);
        break;
      default:
        new GenerateHtml(members);
        break;
    }
  });
}

addMember(0);
