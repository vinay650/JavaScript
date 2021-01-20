const todoInput= document.querySelector('.todo-Input');
const todoButton= document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoButton2= document.querySelector('.todo-show');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',check);
todoButton2.addEventListener('click',select_view);

function addTodo(event){
   event.preventDefault();
   if(todoInput.value==="")
   {
      alert("Fill something to add");
   }
   else {
   const todoDiv=document.createElement("div");
   todoDiv.classList.add("todo");

   const newToDo =document.createElement("li");
   newToDo.innerText=todoInput.value;
   newToDo.classList.add('todo-item');
   todoDiv.appendChild(newToDo);

   const completedButton=document.createElement('button');
   completedButton.innerHTML="<i class='fas fa-check'></i>";
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton);

   const trashButton=document.createElement('button');
   trashButton.innerHTML="<i class='fas fa-trash'></i>";
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);

   todoList.appendChild(todoDiv);
   todoInput.value=null;
   }
}

function check(event){
   const item= event.target;
   if(item.classList[0]==='trash-btn'){
      item.parentElement.classList.add('fall');
      item.parentElement.addEventListener('transitionend',function(){
         item.parentElement.remove();
      });}
   if(item.classList[0]==='complete-btn'){
      item.parentElement.classList.toggle('checked');
   }
}

function select_view(event){
   event.preventDefault();
   if(todoButton2.value==='uncomplete')
   {
      ele=document.getElementsByClassName('checked');
       for(var i=0;i<ele.length;i++)
       {
           ele[i].style.display="none";
       }
       ele=document.querySelectorAll("div:not(.todo-container):not(.checked)");
      for(var i=0;i<ele.length;i++)
       {
           ele[i].style.display="flex";
       }
   }

   else if(todoButton2.value==='all')
   {
      ele=document.getElementsByClassName('todo');
       for(var i=0;i<ele.length;i++)
       {
           ele[i].style.display="flex";
       }
   }
   else if(todoButton2.value==='complete'){
      ele=document.querySelectorAll("div:not(.todo-container):not(.checked)");
      for(var i=0;i<ele.length;i++)
       {
           ele[i].style.display="none";
       }
   }

}
