
// const chalk = require('chalk');
// const getnotes= require('./notes.js');

// const comand= process.argv[2];

// console.log(process.argv);

// // // console.log(comand[2]);

// // if(comand == 'add'){
// //     console.log("adding note to...")
// // }
// // else if(comand== 'remove'){

// // console.log("removing notes.....")
// // }

// // console.log(getnotes());
// // console.log(chalk.blue('Hello world!'));


const yargs= require('yargs');

const notes = require('./notes.js');
// const addNote = notes.addNote();
// console.log(addNote);

yargs.version('2.1.0');

yargs.command({

command: 'add',
describe: 'Add a New note',
handler: function(){

    console.log('adding a new note');
}

})


yargs.command({

    command: 'add2',
    describe: 'adding a note',
   builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'body of the note',
           demandOption: true,
           type: 'string'
           }
       
   }, 
   handler(argv) {
       
    notes.addNote(argv.title, argv.body);
       console.log(`Adding the new note: ${argv.title}`);
        console.log(`Adding the body to it : ${argv.body}`);
}
    })

    // yargs.parse();

    yargs.command({

        command: 'remove',
        describe: 'remove a note',
       builder: {
           title: {
               describe: 'Note title',
               demandOption: true, //makes title a required argument
               type: 'string'
           }
       }, 
       handler(argv) {
           
        notes.removeNote(argv.title);
        console.log(`Removing the note: ${argv.title}`);
    }
        })
    
        yargs.command({

            command: 'list',
            describe: 'list the note',
           builder: {
               title: {
                   describe: 'Note title',
                   demandOption: false, //makes title a required argument
                   type: 'string'
               }
           }, 
           handler: function(argv) {
               
            notes.listNote(argv.title);
            console.log(`listing the note: ${argv.title}`);
        }
            })

            yargs.command({

                command: 'Read',
                describe: 'Read the notes',
               builder: {
                   title: {
                       describe: 'Note title',
                       demandOption: true, //makes title a required argument
                       type: 'string'
                   }

               }, 
               handler: function(argv) {
                   
                notes.readNote(argv.title, argv.body);
                // console.log(`Reading the notes: ${argv.title}`);
            }
                })
            
                //modify note
                
            yargs.command({

                command: 'modify',
                describe: 'modify the note',
               builder: {
                   title: {
                       describe: 'Note title',
                       demandOption: true, //makes title a required argument
                       type: 'string'
                   }

               }, 
               handler: function(argv) {
                   
                notes.modifyNote(argv.title, argv.body);
                console.log(`Reading the notes: ${argv.title}`);
            console.log(`Reading the body: ${argv.body}`);
            }
                })
        
        const object = yargs.argv;

console.log(object);