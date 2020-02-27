const getNotes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Add a new note',
    handler: (argv) => {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('removing note');
    }
});

yargs.command({
    command: 'list',
    describe: 'print placeholder message for now',
    handler: () => {
        console.log('list!');
    }
});

yargs.command({
    command: 'read',
    describe: 'print placeholder message for now',
    handler: () => {
        console.log('read!');
    }
});

yargs.parse();
