// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title:',
            validate: title => {
                if (title) {
                    return true
                } else {
                    console.log('Please enter a title for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description:',
            validate: desc => {
                if (desc) {
                    return true
                } else {
                    console.log('Please enter a description of your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
            validate: install => {
                if (install) {
                    return true
                } else {
                    console.log('Please enter installation instructions for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
            validate: usage => {
                if (usage) {
                    return true
                } else {
                    console.log('Please enter usage information for your project')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution guidlines:',
            validate: contribute => {
                if (contribute) {
                    return true
                } else {
                    console.log('Please enter contribution guidlines for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions:',
            validate: test => {
                if (test) {
                    return true
                } else {
                    console.log('Please enter test instructions for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter GitHub username:',
            validate: githubUsername => {
                if (githubUsername) {
                    return true
                } else {
                    console.log('Please enter your GitHub username')
                    return false;
                }
            }
        },
        {
        type: 'input',
            name: 'email',
            message: 'Enter your email:'
        }
    ])}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions();