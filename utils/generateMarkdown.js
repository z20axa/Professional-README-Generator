// packages required
const fs = require('fs');

// function declaration to generate markdown for README
function generateMarkdown(data) {
  let readme = `
  <!-- adding project tittle from user entered input data -->
  # ${data.projectTitle}

  <!-- adding license badge from user selected input data near the top of the README -->
  <!-- condition to check for the project license to display the license badge, if not license, then return an empty string -->
  ${data.projectLicense == "None" ? "" : `![License Badge](https://img.shields.io/badge/License-${data.projectLicense}-blue)`}

  ## Description
  <!-- adding project description from user entered input data -->
  ${data.projectDescription}

  ## Table of Contents
         
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  <!-- adding project installation instructions from user entered input data -->
  ${data.projectInstallation}
         
  ## Usage
  <!-- adding project usage from user entered input data -->
  ${data.projectUsage}
  
  ![alt text](assets/images/screenshot.png)

  ## License
  <!-- adding which license the application is covered under from user entered input data -->
  Application covered under ${data.projectLicense} [license](https://opensource.org/licenses/${data.projectLicense})
  
  ## Contributing
  <!-- adding project contributions from user entered input data -->
  ${data.projectContributions}
  
  ## Tests
  <!-- adding project tests from user entered input data -->
  ${data.projectInstructions}

  ## Questions
  <!-- adding user GitHub user name from user entered input data -->
  Follow [THIS LINK](https://github.com/${data.githubUserName}) for my GitHub profile.
  
  <!-- adding user email from user entered input data -->
  Please feel free to reach me at my email ${data.userEmail}!

  `;
  // function call to write to the file 
  fs.writeFile("./README_generated.md", readme, (err) => {
    if (err) return console.error(err);
    console.log("Success!");
});
}

module.exports = generateMarkdown;


