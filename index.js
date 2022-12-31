// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const questions = require('./utils/questions.js')
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
prompt(questions).then(generateMarkdown);

