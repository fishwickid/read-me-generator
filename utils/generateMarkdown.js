// function to generate markdown for README
function generateMarkdown(data) {
    return `# Project Title: ${data.title}<h3><ins>Descripton:</ins></h3><br>${data.description}<h3><ins>Installaton Details:</ins></h3><br>${data.installation}<h3><ins>Usage Information:</ins></h3><br>${data.usage}<h3><ins>Licences:</ins></h3><br>${data.licences.licences}<h3><ins>GitHub Account:</ins></h3><br>${data.github}<h3><ins>Contact Information:</ins></h3><br>${data.contact}`;
}

module.exports = generateMarkdown;
