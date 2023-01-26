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
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  ![alt text](assets/images/screenshot.png)

  ## License
  <!-- adding which license the application is covered under from user entered input data -->
  ${data.projectLicense}
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Contributing
  <!-- adding project contributions from user entered input data -->
  ${data.projectContributions}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
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


