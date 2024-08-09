//selecting html element//

let TodoInput = document.querySelector(".to-in");

let TodoButton = document.querySelector(".to-btn");

let TodoList = document.querySelector(".todo-list");

   
//Adding event listener//

TodoButton.addEventListener('click',addto);

//Add Function//

function addto(e){

    //create todo div//

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

     //create todo list//

     const toLi = document.createElement('li')

     e.preventDefault()
     
     toLi.classList.add('todoItems')

     toLi.innerText =  TodoInput.value

     todoDiv.appendChild(toLi)

     TodoList.appendChild( todoDiv)
  

     //clear input//
     TodoInput.value = ""
     

}