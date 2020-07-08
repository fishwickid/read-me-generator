var inquirer = require('inquirer');

inquirer.prompt ([
  {
    type: 'input',
    name: 'Title',
    message: "What's the name of you project",
  },
  {
  type: 'input',
    name: 'Description',
    message: "Explain what this project is about (max 200 characters)",
  },
  {
    type: 'input',
      name: 'Installation',
      message: "Provide installation informaiton",
    },
    {
        type: 'input',
          name: 'Usage information',
          message: "Provide usage informaiton",
        },
  {
    type: 'checkbox',
    message: 'What licence do you require',
    name: 'Licences',
    choices: [
      new inquirer.Separator(' = licence = '),
      {
        name: 'Licence 1',
      },
      {
        name: 'FLicence 2',
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
          message: "Tell us your best email address to get in touch",
        },






  {
    type: 'list',
      name: 'Contact method',
      message: 'What is your preferred method of communication?',
      choices: ['Phone', 'Email', 'Fax'],
      filter: function (val) {
        return val.toLowerCase();
      },
  },
])
.then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});