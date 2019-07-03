const fs = require('fs');

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
		console.log('note added');
	} else {
		console.log(`The title - ${title} - already exists`);
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
};
