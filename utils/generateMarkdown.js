// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return "";
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `![Github license](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}


  ## Table of Contents
  
  - [Description](#description)
  - [Installation Instructions](#instructions)
  - [Usage](#usage)
  - [Tests](#test)
  - [License](#license)
  - [Contributing Guidlines](#contribution)
  - [Contact me](#email)
  
  
  # Description:
  ${data.description}

  # Installation Instructions:
  ${data.instructions}

  # Usage:
  ${data.usage}

  # Tests:
  ${data.test}

  # License:
  ${data.license}

  # Contributing Guidelines:
  ${data.contribution}

  # Contact Me
  Please address and questions or concerns to me directly at:
  ${data.email}

  Or find my GitHub at:
  [github/${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
