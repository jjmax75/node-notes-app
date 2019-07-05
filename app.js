const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// customise yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string',
		},
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// create list command
yargs.command({
	command: 'list',
	describe: 'List notes',
	handler(argv) {
		notes.listNotes();
	},
});

// create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

yargs.parse();
