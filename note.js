document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const saveNoteButton = document.getElementById('saveNote');
    const notesList = document.getElementById('notesList');

    // Function to create a new note element
    function createNoteElement(noteText) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            notesList.removeChild(noteElement);
        });

        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteButton);

        return noteElement;
    }

    // Function to save a note
    function saveNote() {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const noteElement = createNoteElement(noteText);
            notesList.appendChild(noteElement);
            noteInput.value = ''; // Clear the textarea
        }
    }

    // Event listener for the Save Note button
    saveNoteButton.addEventListener('click', saveNote);

    // Optional: Allow pressing Enter to save note
    noteInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            saveNote();
        }
    });
});
