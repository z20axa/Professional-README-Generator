// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your project title",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "What is your project description",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What are your project installation instructions",
        name: "projectInstallation"
    },
    {
        type: "input",
        message: "What is your project usage information",
        name: "projectUsage"
    },
    {
        type: "input",
        message: "What are your project contributions guidelines",
        name: "projectContributions"
    },
    {
        type: "input",
        message: "What are your project test instructions",
        name: "projectInstructions"
    },
    {
        type: "list",
        message: "What is your project license",
        choices: ["MIT", "Apache", "The Unlicense", "None"],
        name: "projectLicense"
    },
    {
        type: "input",
        message: "What is your GitHub username",
        name: "githubUserName"
    },
    {
        type: "input",
        message: "What is your email address",
        name: "userEmail"
    }
];

module.exports = questions;