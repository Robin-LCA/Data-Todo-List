    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
  }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json() )
      .then( (data) => arrayOfTodos = data)
      .then( () => populateTodos())
      .then( () => populateTodos2())
      .then( () => logTodos())
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {

   for(let i = 0; i < arrayOfTodos.length; i++) {

      // Find the ol by ID and put it in a variable
      let todoList = document.getElementById('todo-list');

      // Create and element for a list item - li
      let todoItem = document.createElement('LI'); // <li></li>

      // create the text element for the title
      let todoTitle = document.createTextNode(arrayOfTodos[i].title);

      // put the list item in the ol
      todoItem.appendChild(todoTitle); //<li>lorem ipsum</li>
      todoList.appendChild(todoItem);  // puts the li inside the ol
   }     
  
}


const populateTodos2 = () => {

   let todoSection = document.getElementById('container');
   
   let tdLine = document.createTextNode(`<div> <b>Title:</b> ${arrayOfTodos[0].title} <i>status is</i> ${arrayOfTodos[0].completed} </div>`);

   let todoP = document.createElement('P');

   todoP.appendChild(tdLine);

   todoSection.appendChild(tdLine);


}
