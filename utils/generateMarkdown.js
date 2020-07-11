// function to generate markdown for README
function generateMarkdown(data) {
    return `# Project Title: ${data.title}\n ### Project Description:\n ${data.description}\n ### Installation Details:\n ${data.installation}\n ### Usage Information:\n ${data.usage}\n ### Licences Required:\n ${data.licences}\n  ### Github:\n ${data.github}\n ### Contact Info:\n ${data.contact}`;
}

module.exports = generateMarkdown;
