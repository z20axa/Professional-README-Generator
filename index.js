// TODO: Include packages needed for this application
const markdownGenerator = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What's your project title",
    "What is your project description",
    "What are your project installation instructions",
    "What is your project usage information",
    "What are your project contributions guidelines",
    "What are your project test instructions",
    "What is your project license",
    "What is your GitHub username",
    "What is your email address",
];

// TODO: Create a function to write README file
function writeToFile(data) {
    markdownGenerator.generateMarkdown(data);

    return fs.writeFile("README2.md", JSON.stringify(readme), (err) => {
        if (err) return console.error(err);
        console.log("Success!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "projectTitle"
        },
        {
            type: "input",
            message: questions[1],
            name: "projectDescription"
        },
        {
            type: "input",
            message: questions[2],
            name: "projectInstallation"
        },
        {
            type: "input",
            message: questions[3],
            name: "projectUsage"
        },
        {
            type: "input",
            message: questions[4],
            name: "projectContributions"
        },
        {
            type: "input",
            message: questions[5],
            name: "projectInstructions"
        },
        {
            type: "list",
            message: questions[6],
            choices: ["MIT", "others"],
            name: "projectLicense"
        },
        {
            type: "input",
            message: questions[7],
            name: "githubUserName"
        },
        {
            type: "input",
            message: questions[8],
            name: "userEmail"
        },
    ])
    .then(answers => {
        writeToFile(answers);
    });
};

// Function call to initialize app
init();
