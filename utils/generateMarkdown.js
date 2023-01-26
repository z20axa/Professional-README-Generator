// packages required
const fs = require('fs');

// function declaration to generate markdown for README
function generateMarkdown(data) {
  let readme = `
  <!-- adding project tittle from user entered input data -->
  # ${data.projectTitle}

  <!-- adding license badge from user selected input data near the top of the README -->
  <!-- condition to check for the project license to display the license badge, if not license, no licence badge shown -->
  ${data.projectLicense == "None" ? "" : `![License Badge](https://img.shields.io/badge/License-${data.projectLicense}-blue)`}

  ## Description
  <!-- adding project description from user entered input data -->
  ${data.projectDescription}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  <!-- adding project installation instructions from user entered input data -->
  ${data.projectInstallation}
         
  ## Usage
  <!-- adding project usage from user entered input data -->
  ${data.projectUsage}
  
  App Screen Shots
  ![Hemlock Fitness Home Page](./utils/public/images/hemlock-home.png)
  ![Hemlock Fitness Log In Page](./utils/public/images/Web%20capture_23-12-2022_15414_localhost.jpeg)
  ![Hemlock Fitness User Dashboard](./utils/public/images/readme/hemlock-user-dashboard.png)
  ![Hemlock Fitness User Schedule](./utils/public/images/readme/hemlock-my-schedule.png)

  ## License
  <!-- adding which license the application is covered under from user entered input data -->
  <!-- condition to check for the project license to display the license coverage, if not license, then project no coveraged under any license -->
  ${data.projectLicense == "None" ? "Application covered under NO license" : `Application covered under the ${data.projectLicense} license.`}
  
  
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
    console.log("Successfully generated a markdown README from entered user input data!!!");
});
}

module.exports = generateMarkdown;


