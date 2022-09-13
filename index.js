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

## Badges & License
These badges are by [shields.io](https://shields.io/). [![License](https://img.shields.io/badge/License-${data.badges}-blue.svg)](https://opensource.org/licenses/${data.badges})

## Features 
${data.features}

## How to contribute
${data.contribute}

## Test 
${data.test}

## Questions
Find me on Github: (https://github.com/${data.questions}).

## Email
If you have any other questions feel free to email me at: ${data.email} Thank you.
`;

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
            message: "Do you have a description?",
            name: "description",
        },
        {
            type: "list",
            message: "what license would you like?",
            name: "badges",
            choices: ["MIT", "Boost_1.0"],
        },
        {
            type: "input",
            message: "do you have a installation?",
            name: "installation",
        },
        {
            type: "input",
            message: "do you have a usage?",
            name: "usage",
        },
        {
            type: "input",
            message: "do you have credits?",
            name: "credit",
        },
        {
            type: "input",
            message: "do you have features?",
            name: "features",
        },
        {
            type: "input",
            message: "do you have any contributors?",
            name: "contribute",
        },
        {
            type: "input",
            message: "do you have a test image?",
            name: "test",
        },
        {
            type: "input",
            message: "What is your github?",
            name: "questions",
        },
        {
            type: "input",
            message: "whats youre email?", // change this one as well!!!
            name: "email",
        },

    ])


    .then((response) => {
        console.log(response)
        const readMeContent = generateReadMe(response)

        fs.writeFile("README.md", readMeContent, (err) =>
            err ? console.log(err) : console.log("Success!!")
        );
    });
