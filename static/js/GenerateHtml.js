const fs = require("fs");
const utils = require("util");

// Promisify readFile
const readFileAsync = utils.promisify(fs.readFile);

class GenerateHtml {
  constructor(teamMembers) {
    this.loadHtmlComponents()
      .then((htmlComponents) => {
        this.teamMembers = teamMembers;
        [this.header, this.footer] = htmlComponents;
        console.log("hello");
        console.log(this.header);
        console.log(this.footer);
        console.log(this.teamMembers);
        console.log("goodbye");
        this.generatePage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  generatePage() {
    // Generate the HTML page
    const finalHtml = this.header + this.footer;
    fs.writeFile("./dist/finalIndex.html", finalHtml, (err) => {
      if (err) throw new Error(err);
      console.log(`Generated finalIndex.html`);
    });
  }

  loadHtmlComponents = async () => {
    this.header = await readFileAsync("./static/html/index.html", "utf8").catch(
      (err) => console.error(err)
    );
    this.footer = await readFileAsync(
      "./static/html/footer.html",
      "utf8"
    ).catch((err) => console.error(err));
    return [this.header, this.footer];
  };

  generateMemberCard = (member) => {
    switch (member.role) {
      case "Engineer":
        member["color"] = "bg-primary";
        member["special"] = `${member.github}`;
        member["specialLabel"] = "Github";
        break;
      case "Intern":
        member["color"] = "bg-danger";
        member["special"] = `${member.school}`;
        member["specialLabel"] = "School";
        break;
      default:
        member["color"] = "bg-success";
        member["special"] = `${member.officeNumber}`;
        member["specialLabel"] = "Office Number";
    }
    return `<div class="card m-4 text-light">
      <div class="card-header ${member.color}">
        <h3>${member.name}</h3>
            <div class="d-flex flex-row">
                <p class="m-2">${member.role}</p>
            </div>
      </div>
      <ul class="list-group list-group-flush text-dark">
        <li class="list-group-item">ID: ${member.id}</li>
        <li class="list-group-item">
            Email: <a href="mailto:${member.email}" target="no_blank">${member.email}</a>
          </li>
        <li class="list-group-item">${member.specialLabel} = ${member.special}</li>
      </ul>
    </div>`;
  };
}

module.exports = GenerateHtml;
