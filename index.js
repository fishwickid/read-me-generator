var inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: 'input',
    name: 'Title',
    message: "What's the name of you project",
  },
  {
    type: 'input',
    name: 'Description',
    message: "Explain what this project about?",
  },
  {
    type: 'input',
    name: 'Installation',
    message: "What are the installatoin requirements?",
  },
  {
    type: 'input',
    name: 'Usage information',
    message: "Details about using this code?",
  },
  {
    type: 'checkbox',
    message: "What licence do you require?",
    name: 'Licences',
    choices: [
      new inquirer.Separator(' = licence = '),
      {
        name: 'Licence 1',
      },
      {
        name: 'Licence 2',
      },
      {
        name: 'Licence 3',
      },
      {
        name: 'Other',
      },
    ]
  },
  {
    type: 'input',
    name: 'My Github',
    message: "What is your Github username?",
  },
  {
    type: 'input',
    name: 'Contact me',
    message: "Your email address?",
  },

];

// Write results to a README.md document
function writeToFile(filename, data) {

  fs.appendFileSync(filename + ".md", JSON.stringify(data).slice(1, -1) + "\n", function (err) {
    
    // if there is an error
    if (err) {
      return console.log(err);
    }

    // if successfull
    console.log("Success!");
  });

}

// Function to start the program
function init() {
  inquirer.prompt(questions)

  .then(function (response) {

    console.log(response);

    const data = response;

    const mark = generateMarkdown(data);

    writeToFile("README". mark); 
  });

}


// calls and initiates the program
init();