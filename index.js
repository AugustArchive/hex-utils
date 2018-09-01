const inquirer = require('inquirer');
const questions = [{
  name: 'hex',
  message: "Provide an hexadecimal to convert it to an integer. (Type 'exit' to exit this prompt):",
  validate: (input) => input.startsWith('#') || typeof input === 'string' && input.toLowerCase() === 'exit',
  default: "#ffd1dc"
}];

console.log([
  `[${'-'.repeat(100)}]`,
  'Welcome to "hex-utils"',
  "Made by August#5820 or ohlookitsAugust on GitHub.",
  "This is a utility to convert hexadecimals to integers."
].join('\n'));
prompt(questions);

function prompt(question) {
  inquirer.prompt(question)
    .then(res => {
      if (typeof res.hex === 'string' && res.hex.toLowerCase() === 'exit') process.exit(0);
      res.hex = parseInt(res.hex.replace('#', ''), 16);
      console.log(`>> Hexadecimal -> Integer: ${res.hex}`);
      prompt(question);
    });
};