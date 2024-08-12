//selecting html element//

let TodoInput = document.querySelector(".to-in");

let TodoButton = document.querySelector(".to-btn");

let TodoList = document.querySelector(".todo-list");

   
//Adding event listener//

TodoButton.addEventListener('click',addto);

// add eventlistener to delete//

TodoList.addEventListener('click',Del);


//Add Function//

function addto(e){

    //create todo div//

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

     //create todo list//

     const toLi = document.createElement('li');

     //e.preventDefault();
     
     toLi.classList.add('todoItems')

     toLi.innerText =  TodoInput.value;

     todoDiv.appendChild(toLi);

     


     // trash button //

     const trashbtn = document.createElement('button');
     
     trashbtn.classList.add('trash')

     trashbtn.innerText = "Delete";

     todoDiv.appendChild(trashbtn)

     TodoList.appendChild( todoDiv)
  

     //clear input//
     TodoInput.value = "";
     

}

// Function Delete//

function Del(e){
    const item = e.target;

    if (item.classList[0]==='trash'){

        const todo = item.parentElement;
       
       
        todo.remove();

    }

}