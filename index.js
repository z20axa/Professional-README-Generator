// packages needed for this application
const { prompt } = require('inquirer');
const questions = require('./utils/questions.js')
const generateMarkdown = require("./utils/generateMarkdown");

// app init function call
prompt(questions).then(generateMarkdown);

