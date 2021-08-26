const fs = require("fs");
const utils = require("util");

// Promisify readFile
const readFileAsync = utils.promisify(fs.readFile);

readFileAsync("./lib/html/index.html", "utf8")
  .then((html) => {
    console.log(typeof html);
    fs.writeFile("./index.html", html, "utf8", (err) => {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
