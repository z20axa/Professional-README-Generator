// packages needed for this application
const inquirer = require('inquirer');
const questions = require('./utils/questions.js')
const generateMarkdown = require("./utils/generateMarkdown");

// app init function call
inquirer
    .prompt(questions).then(generateMarkdown);

