const notes = require('./notes');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'title',
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
    handler (argv) {
        notes.addNode(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'print placeholder message for now',
    handler () {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'print placeholder message for now',
    handler ()  {
        console.log('read!');
    }
});

yargs.parse();
