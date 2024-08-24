import React, { useEffect, useRef } from 'react';

function TodoListSection() {
  const todoInputRef = useRef(null);
  const todoListRef = useRef(null);
  const codeElementRef = useRef(null);
  const copyCodeButtonRef = useRef(null);

  useEffect(() => {
    const todoInput = todoInputRef.current;
    const todoList = todoListRef.current;
    const codeElement = codeElementRef.current;
    const copyCodeButton = copyCodeButtonRef.current;

    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-2';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded-md text-sm hover:bg-red-600 transition-colors';
        deleteButton.onclick = () => li.remove();
        
        li.appendChild(textSpan);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
      }
    }

    todoInput.onkeypress = (e) => {
      if (e.key === 'Enter') addTodo();
    };

    const code = `
<!-- HTML -->
<div class="todo-container">
  <input type="text" id="todoInput" placeholder="Enter a new todo">
  <button id="addTodo">Add Todo</button>
  <ul id="todoList"></ul>
</div>

<!-- CSS -->
<style>
.todo-container {
  max-width: 400px;
  margin: 0 auto;
}

#todoInput {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}

#addTodo {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

#todoList {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #f1f1f1;
  margin-bottom: 4px;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
}
</style>

<!-- JavaScript -->
<script>
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => li.remove();
    
    li.appendChild(textSpan);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

addTodoButton.onclick = addTodo;
todoInput.onkeypress = (e) => {
  if (e.key === 'Enter') addTodo();
};
</script>
    `;

    codeElement.textContent = code;

    copyCodeButton.onclick = () => {
      navigator.clipboard.writeText(code).then(() => {
        copyCodeButton.textContent = 'Copied!';
        setTimeout(() => {
          copyCodeButton.textContent = 'Copy Code';
        }, 2000);
      });
    };
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Todo List with DOM Manipulation</h2>
      
      <div className="mb-4">
        <input
          ref={todoInputRef}
          type="text"
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter a new todo"
        />
        <button
          onClick={() => todoInputRef.current.value.trim() && addTodo()}
          className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
        >
          Add Todo
        </button>
      </div>
      
      <ul ref={todoListRef} className="list-none"></ul>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Code:</h3>
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
          <code ref={codeElementRef} className="language-html"></code>
        </pre>

        <button
          ref={copyCodeButtonRef}
          className="mt-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Copy Code
        </button>
      </div>
    </section>
  );
}

export default TodoListSection;