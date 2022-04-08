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
}
add_note_btn.addEventListener('click', add_note)

