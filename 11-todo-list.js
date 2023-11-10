const todoList = [];

renderTodoList();
    function renderTodoList () {
        let todoListHTML = '';

        for (let i = 0 ; i < todoList.length ; i++){
            const todoObject = todoList[i];
            // const name = todoObject.name;
            // const dueDate = todoObject.dueDate;
            const { name, dueDate } = todoObject;
            
            const html = `<p>${name} ${dueDate}<button 
                onclick = "
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button></p>`;
            todoListHTML += html;
        }
        
    
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

function addTodo (){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const inputDuedateElement = document.querySelector ('.js-due-date-input');
    const dueDate = inputDuedateElement.value;
    todoList.push({
        name : name,              //    you can simply write    
        dueDate : dueDate        //    {name,
                                //     dueDate} because key and and values are equal
    });

    // To remove the value from input box after clicking add button.
    inputElement.value = '';
    renderTodoList();
}