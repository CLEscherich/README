// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  `;
}
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return "\n* [License](#license)\n";
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions or issues or contact me directly at ${data.email}.
or check out my Github at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
