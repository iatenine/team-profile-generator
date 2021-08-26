const Manager = require("./lib/js/Manager");
const Intern = require("./lib/js/Intern");
const Engineer = require("./lib/js/Engineer");
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
      type: "input",
      message: `What is the ${roles[currentRole].role}'s Employee ID?`,
      name: "id",
    },
    {
      type: "input",
      message: `What is the ${roles[currentRole].role}'s email address?`,
      name: "email",
    },
    {
      type: "input",
      message: `What is the ${roles[currentRole].role}'s ${roles[currentRole].special}?`,
      name: "special",
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
        console.log(members);
        break;
    }
  });
}

addMember(0);
