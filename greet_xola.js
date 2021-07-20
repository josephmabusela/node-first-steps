const chalk = require('chalk');

const figlet = require('figlet');

const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

console.log(styledMessage);

console.log(figlet.textSync('Hello, Xola', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));