console.log("welcome to notes making app");
showNotes();
let addBtn = document.getElementById("addBtn");
console.log(addBtn);
addBtn.addEventListener("click",function(e){
let addTxt=document.getElementById("addTxt");
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}else{
    notesObj = JSON.parse(notes);
}
notesObj.push(addTxt.value);
localStorage.setItem("notes",JSON.stringify(notesObj));
addTxt="";
showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}else{
    notesObj = JSON.parse(notes);
}
let html="";
notesObj.forEach(function(element,index) {
    html=html+`
    <div class="noteCard my-2 mx-2  card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick=deleteNote(this.id) class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
});
let notesElem=document.getElementById("notes");
if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show! Use "Add Note" section above to add notes.`;
  }
}
//function to delete note
function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
