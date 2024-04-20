// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions.',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Please enter instructions or information on how to use the application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the guidelines for contribution?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Please select the applicable license for this project.',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'None',]
    },
    {
        type: 'input',
        message: 'Please enter information on how to test the application',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message:'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
