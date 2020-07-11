// function to generate markdown for README
function generateMarkdown(data) {
    return `# Project Title:${data.title}<h2><ins>Descripton</ins></h2><br>${data.description}<h2><ins>Descripton</ins></h2><br>${data.installation}<h2><ins>Descripton</ins></h2><br>${data.usage}<h2><ins>Descripton</ins></h2><br>${data.licences}<h2><ins>Descripton</ins></h2><br>${data.github}<h2><ins>Descripton</ins></h2><br>${data.contact}`;
}

module.exports = generateMarkdown;
