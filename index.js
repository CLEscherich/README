const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

 //created questions for the user to answer
const questions = [
 
  {
    // Title
    type: "input",
    message: "What is the name of this project?",
    name: "title",
  },
  {
    //Description
    type: "input",
    message: "Describe this project?",
    name: "description"
  },
  {
    //installation
    type: "input",
    message: "How do you install this project?",
    name: "installation",
    default: "npm install"
  },
  {
    //Usage
    type: "input",
    message: "How do you use this project?",
    name: "usage"
  },
  {
    //License list to choose from
    type: "list",
    message: "what license did you use?",
    name: "license",
    choices: ["ISC", "Open", "Academic", "None"]
  },
  {
    // contributors
    type: "input",
    message: "who are the contributors of this project?",
    name: "contributors"
  },
  {//Test
    type: "input",
    message: "run tests right here",
    name: "test",
    default: "npm test"
  },
  {
    //badges
    type: "input",
    message: "Place your URL badge here",
    name: "badges"
  },
  //User Info
  {
    //User Name
    type: "input",
    message: "What is your username?",
    name: "username"
  },
  {
    //User Email
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    //User Github
    type: "input",
    message: "What is your GitHub URL?",
    name: "github"
  },
]
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Creating your README file");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
  }
  
  init();
  