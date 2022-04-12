const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
//Add Note Area
const add_note_btn = document.querySelector('.icons')
const note_area = document.querySelector('.write-note-area')

const add_note_area = `
  <div class="text-div">
    <label for="note">NOTE:</label>
      <textarea id="note-box" name="note" rows="20" cols="80" placeholder="Title\nYour note here:"></textarea>
          <button id="save-button" type="button">
              Save
          </button>
          <button id="cancel-button" type="button">
              Cancel
          </button>
  </div>
`
function add_note() {
  note_area.insertAdjacentHTML("afterbegin", add_note_area)
  add_note_btn.removeEventListener('click',add_note)

    //Delete text area
  const delete_btn = document.querySelector('#cancel-button')
  const note_message = document.querySelector('#note-box')

  delete_btn.addEventListener('click', function handlerClick(){
    console.log(note_message.value);
    note_message.value = '';
  })

  //Save Note
  const save_btn = document.quarySelector('#save-button');
  const noteDisplayArea = document.querySelector(".notes-list");
  const my_id = 1;

  function save_message(){
    const my_title = note_message.value.split('\n')[0]
    my_id += 1;

    notes.push({
      key: my_title,
      noteBody: note_message.value,
      id: my_id
    }) 
    template = 
      `  <li>${titles}</li>`;
    noteDisplayArea.insertAdjacentHTML("beforeend", template);
  }

  //Click on Side Nav
  const readNote = document.querySelector(".read-note-area");

  function displayText(event) {
    if (event.target.localName === "li") {
      content = event.target.innerText;
      console.log(content);
    }

    for (const note of notes) {
      if (note.title == content) 
      content = note.noteBody;
      title2 = note.title;
    }

    readNoteTemplate = ` 
      <div id="options">
          <button class="deleteReadBtn">x</button>
      <div class="text">
          <h1>${title2}</h1>
          <p>${content}</p>
      </div>  `;
    readNote.insertAdjacentHTML("afterbegin", readNoteTemplate);

    //Delete the read text
    const deleteReadBtn = document.querySelector(".deleteReadBtn");
    function deleteReadText() {
      while (readNote.hasChildNodes()) {
        readNote.removeChild(readNote.firstChild);
      }
    }
      deleteReadBtn.addEventListener("click", deleteReadText);
  }
  noteDisplayArea.addEventListener("click", displayText);
  save_btn.addEventListener('click', save_message)
}
add_note_btn.addEventListener('click', add_note)

