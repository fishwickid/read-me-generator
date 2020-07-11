var inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the name of you project",
  },
  {
    type: 'input',
    name: 'description',
    message: "Explain what this project about?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installatoin requirements?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Details about using this code?",
  },
  {
    type: 'checkbox',
    message: "What licence do you require?",
    name: 'licences',
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
    name: 'github',
    message: "What is your Github username?",
  },
  {
    type: 'input',
    name: 'contact',
    message: "Your email address?",
  },

];

// function to write README file
function writeToFile(filename, data) {

  //append stringified JSON object to new .json file
  fs.appendFileSync(filename + ".md", JSON.stringify(data).slice(1, -1) + "\n", function (err) {

      //error if unable to complete
      if (err) {
          return console.log(err);
      }

      //message if successful
      console.log("Success!");

  });

}

// function to initialize program
function init() {
  inquirer
  
      //initilise questions
      .prompt(questions)

      //access promise 
      .then(function (response) {

          console.log(response);

          //Save the response data as a constant
          const data = response;

          //save the content and convert to markdown
          const mark = generateMarkdown(data);
   
          //write data to file
          writeToFile("README", mark); 
       
      });

}

// function call to initialize program
init();
