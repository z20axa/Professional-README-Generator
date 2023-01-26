// packages required
const { writeFile } = require('fs');

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = `# ${data.projectTitle}
  <!-- adding license badge near the top of the README -->
  <!-- condition to check for the project license to display the license badge, if not license, then return an empty string -->
  ${data.projectLicense == "None" ? "" : `![License Badge](https://img.shields.io/badge/License-${data.projectLicense}-blue)`}


  ## Description

  ${data.projectDescription}

  ## Table of Contents
         
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.projectInstallation}
         
  ## Usage

  ${data.projectUsage}
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  ![alt text](assets/images/screenshot.png)

  ## License

  ${data.projectLicense}
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Contributing

  ${data.projectContributions}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Tests

  ${data.projectInstructions}


  ## Questions

  ${data.githubUserName}
  ${data.userEmail}

  `;

  writeFile("./README2.md", readme, (err) => {
    if (err) return console.error(err);
    console.log("Success!");
});
}

module.exports = generateMarkdown;


