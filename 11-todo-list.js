const todoList = [];

function addTodo (){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log (todoList)

    // To remove the value from input box after clicking add button.
    inputElement.value = '';
}