const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

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
			type: 'string'
		},
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		console.log('Title:', argv.title);
		console.log('Body:', argv.body);
	},
});

// create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: () => {
		console.log('removing a note');
	},
});

// create list command
yargs.command({
	command: 'list',
	describe: 'List notes',
	handler: () => {
		console.log('lsiting notes');
	},
});

// create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: () => {
		console.log('reading a note');
	},
});

yargs.parse();
