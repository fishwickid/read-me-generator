// function to generate markdown for README
function generateMarkdown(data) {
    return `# Project Title: ${data.title}\n ### Project Description: ${data.description}\n ### ${data.installation}\n ### ${data.usage}\n ### ${data.licences}\n  [title] ${data.github}\n ### ${data.contact}`;
}

module.exports = generateMarkdown;
