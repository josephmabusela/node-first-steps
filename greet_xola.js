const chalk = require('chalk');

const figlet = require('figlet');

const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

console.log(styledMessage);

const figletMessage = greet("Xola")

console.log(figlet.textSync(figletMessage, {
    
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));