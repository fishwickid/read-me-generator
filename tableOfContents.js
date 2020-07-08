// Meets Submission Requirements in the following section.
​
​
// The generated README includes the following sections:
​
// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// The generated README includes 1 badge that's specific to the repository.
​
var printMd = function (myReadme) {
    let myFile = "";
​
    myFile += "# " + myReadme.title + "\n";
​
    myFile += myReadme.description + "\n";
​
    myFile += "## " + "Table of Contents" + "\n";
​
    for (let i = 0; i < myReadme.tableOfContents.length; i++) {
        const element = myReadme.tableOfContents[i];
        myFile += "* " + element + "\n";
    }
​
    return myFile;
}
​
var inquirer = require('inquirer');
​
// var toc = []
// function createToc() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'choice',
//             message: "Would you like to add another table of content?\n",
//             filter: function (val) {
//                 return val.toLowerCase();
//             }
//         }
//     ]).then(function (ans) {
//         if (ans.choice == "n") {
//             return;
//         }
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'toc',
//                 message: "Please type in your toc.\n"
//             }
//         ]).then(function (ans) {
//             toc.push(ans.toc);
//             console.log(toc)
//             createToc();
//         });
//     });
// }
// createToc();
​
inquirer.prompt([
    {
        type: 'input',
        name: 'title', // note, this is the key that will be used in the object...
        message: "What's your readme title?\n",
        filter: function (val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your description?\n"
    }
]).then((answers) => {
    console.log(printMd(answers));
