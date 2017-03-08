require('reify');
const chalk = require('chalk');
const app = require('./app.js');

const problemNum = `Problem${process.argv[2]}`;
console.log(chalk.underline.bold.blue(`Console output for ${problemNum}\n`));
console.log(chalk.underline.bold.blue(`\nReturn value for ${problemNum}\n\n`), app[problemNum](), '\n');