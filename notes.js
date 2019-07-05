const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'your notes...';
};

const addNote = (title, body) => {
	const notes = loadNotesFromFile();
	const hasDuplicateNote = notes.findIndex(note => note.title === title);

	if (hasDuplicateNote === -1) {
		notes.push({
			title,
			body,
		});
		saveNotesToFile(notes);
		console.log(chalk.bgGreen('note added'));
	} else {
		console.log(chalk.bgRed(`The title - ${title} - already exists`));
	}
};

const removeNote = title => {
	const notes = loadNotesFromFile();
	const hasNote = notes.findIndex(note => note.title === title);
	if (hasNote !== -1) {
		const newNotes = notes.filter(note => note.title !== title);
		saveNotesToFile(newNotes);
		console.log(chalk.bgGreen(`"${title}" note removed`));
	} else {
		console.log(chalk.bgRed(`"${title}" note not found`));
	}
};

const loadNotesFromFile = () => {
	try {
		return JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
	} catch (err) {
		return [];
	}
};

const saveNotesToFile = notes => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
	addNote,
	getNotes,
	removeNote,
};
