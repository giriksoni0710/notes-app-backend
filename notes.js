const fs = require('fs');
const chalk = require('chalk');
const _ = require("underscore");

const app = require('./2.js');


console.log('done');



const loadNotes = () =>{

    try{
    
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }
    catch(e){
    return [];
    }
    
    }
    

const addNote = (title, body) => {

    const notes =  loadNotes();

    let dupNote;

    if(notes.length > 0 ){
        dupNote = notes.find((note) => note.title === title);
    }
else{
    dupNote = false;
}



if(!dupNote){

notes.push({
    title: title,
    body: body
});

console.log(notes);
console.log(chalk.green.inverse("The new note has been added."))


}

else{

    console.log("Title already exists!!");
}


// saving the note to the file



saveNotes(notes);

}

const saveNotes = (notes)=>{

    fs.writeFileSync('notes.json',JSON.stringify(notes));
    
    }
//removing the note

const removeNote = (title)=>{


    const notes =  loadNotes();

    const keptNotes = notes.filter((note)=> note.title !== title);


    if(notes.length !== keptNotes.length ){
        
console.log(chalk.green("your note has been removied!!"));
saveNotes(keptNotes);

    }
else{

    console.log("No note found!")
}


}


//list note

const listNote = (title) => {

    const notes = loadNotes();

    console.log(notes);
}

//REad note

const readNote = (title, body) => {

const notes = loadNotes();

if(title){

    var filtered = _.where(notes, {title: title});
console.log("the note is\n")
    console.log(filtered);
}

else{
    console.log("There is no such note!!!");
}




}

const modifyNote = (title, body)=>{


    const notes = loadNotes();

Object.values(notes).forEach(function(value,key){

Object.values(value,key).forEach(function(value,key){

    
    
}

)

})













}
module.exports = {

    addNote,
    removeNote, listNote, readNote, 
    modifyNote
}