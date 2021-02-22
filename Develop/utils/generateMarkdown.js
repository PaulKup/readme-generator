// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT License') {
    return "<img src='https://img.shields.io/badge/LICENSE-MIT-blue'/>"
  } else if (license == 'GNU General Public License v3.0') {
    return "<img src='https://img.shields.io/badge/LICENSE-GNU-blue'/>"
  } else if (license == 'Apache License 2.0') {
    return "<img src='https://img.shields.io/badge/LICENSE-Apache-blue'/>"
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

const email = email => {
  if (email) {
    return 'or by email: ' + email
  } else {
    return false;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} \n
  ## Description
  ${data.description}
  ## Table of Contents
  * [Desciption](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  For any questions reach out on [GitHub](https://github.com/${data.githubUsername}) ${email(data.email)}

`;
}

module.exports = generateMarkdown;
