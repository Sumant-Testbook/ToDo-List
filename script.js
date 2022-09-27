count = 1;
function addNote(){
    count++;
    note = document.createElement("div");
    note.setAttribute("class", "note");
    note.setAttribute("id", "note");

    notes = document.getElementById("notes");
    notes.appendChild(note);
    
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    note.appendChild(row);

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("class", "title");
    title.setAttribute("id", count);
    title.setAttribute("placeholder", "Title");
    row.appendChild(title);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("class", "delete");
    let iconClass = document.createElement("i");
    iconClass.setAttribute("class", "fa fa-trash");
    deleteBtn.appendChild(iconClass);
    deleteBtn.onclick = () => deleteNote();
    row.appendChild(deleteBtn);

    let description = document.createElement("textarea");
    description.setAttribute("class", "description");
    description.setAttribute("id", "description");
    description.setAttribute("rows", "10");
    description.setAttribute("placeholder", "input text here...");
    note.appendChild(description);

}

// window.onload = function() {
//     saveData();
//     getData();
// }

function deleteNote(){
    note = document.getElementById("note");
    note.style.animation = "removeNotes .3s linear";
    note.parentNode.removeChild(note);
}

function saveData(count){
    title = document.getElementById(count).value;
    description = "hello";
    if(!title || !description){
        title = "title";
        description = "description";
    }
    var note = {title: title, description: description};
    localStorage.savedNotes = JSON.stringify(note);
}

function getData(){
    var note = JSON.parse(localStorage.note);
    console.log(note);
    console.log(note.title);
    console.log(note.description);
}