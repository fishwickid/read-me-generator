// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Project Title: 
    ${data.title}
    ## Project Description: 
    ${data.description}
    ### Installation Details:
    ${data.installation}
    ### Usage Information:
    ${data.usage}
    ### Licences Required:
    ${data.licences}  
    ### Github: 
    ${data.github}
    ### Contact Info:
    ${data.contact}`;
}

module.exports = generateMarkdown;
