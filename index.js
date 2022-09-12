// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = (data) => 
`# ${data.title}

[![License](https://img.shields.io/badge/License-${data.badges}-blue.svg)](https://opensource.org/licenses/${data.badges})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Credits 
${data.credits}

## License
${data.license}

## Badges
These badges are by [shields.io](https://shields.io/). [![License](https://img.shields.io/badge/License-${data.badges}-blue.svg)](https://opensource.org/licenses/${data.badges})

## Features 
${data.features}

## How to contribute
${data.contribute}

## Test 
${data.test}

## Questions
${data.questions}

## Email
If you have any other questions feel free to email me at: ${data.email} Thank you.
`;

// TODO: Create an array of questions for user input
// const questions = [];
// Begins to ask questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
        },
        {
            type: "list",
            message: "what license would you like?",
            name: "badges",
            choices: ["MIT", "Boost_1.0"]
        }
    ]) 


.then((response) => {
    console.log(response)
    const readMeContent = generateReadMe(response)

    fs.writeFile("README.md", readMeContent, (err) =>
    err ? console.log(err) : console.log("Success!!")
    );
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
