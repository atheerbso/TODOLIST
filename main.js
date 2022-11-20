// Setting up Variables 

let theInput = document.querySelector(".addTask input");
let theAddButton = document.querySelector(".addTask .plus ");
let tasksContainer = document.querySelector(".tasksContent");
let noTaskMsg = document.querySelector(".no-tasks-message");
let taskCount = document.querySelector(".taskCount span ");
let taskCompleted = document.querySelector(".taskCompleted span ");

// Focus On Input Field 

window.onload = function () {
    theInput.focus();
};

//Adding The Tasks

theAddButton.onclick = function (){

    if(theInput.value === ''){

        console.log("No Value !")
    } else {

        let noTaskMsg = document.querySelector(".no-tasks-message");
       //cheac if soan msg is exect 
        if (document.body.contains(document.querySelector('.no-tasks-message'))){
        
        // when I add task in input field we need to remove this sentence (no tasks message )
        noTaskMsg.remove();
        }
        // create main span element  
        let mainSpan = document.createElement("span");

        //crete delete button 
        let deleteElment = document.createElement("span");

        //creat the main span Text 
        let text = document.createTextNode(theInput.value);

        //create the delete button text 
        let deleteText =document.createTextNode("Delete");

        //add text to main span 
        mainSpan.appendChild(text);

        //add class to main span 

        mainSpan.className ="taskBox";
        //
        deleteElment.appendChild(deleteText);
        //add class to delet botton 
        deleteElment.className ="delete";

        //add delete button to main span 
        mainSpan.appendChild(deleteElment);

        //add the task to the container 
        tasksContainer.appendChild(mainSpan)

        //empty the input 
        theInput.value = '';

        //focus on field 
        theInput.focus();

        calcTasks()

    }
};

document.addEventListener('click' , function(e){

    //delete task 
    if (e.target.className == 'delete'){
    //remove current task
        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0){
          creatNoTasks();
        }

    }


    if (e.target.classList.contains('taskBox')){

        e.target.classList.toggle('finshed');

    }
 creatNoTasks();
});

function creatNoTasks() {

    let msgspan = document.createElement("span");
    let msgtext = document.createTextNode("No-Tasks-To-Show");

    msgspan.appendChild(msgtext);
    msgspan.className = 'no-tasks-message';
    tasksContainer.appendChild(msgspan);
}


//function to calculate tasks 

function calcTasks(){

    taskCount.innerHTML = document.querySelectorAll('.tasksContent .taskBox').length;

    taskCompleted.innerHTML = document.querySelectorAll('.tasksContent .finshed').length;
}