import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Todolist from './componets/todolist/todolist';


function App() {
  const [todo,setTodo] = useState("")
  const [todoItems,setTodoItems] = useState([])
  const handleTodoChange = (event) => {
    setTodo(event.target.value)
  }
  const gnan = () =>{
    console.log(todo);
    const date = new Date()
    const newTodo = {
      id : date.getTime(),
      todoItem : todo
    }
    setTodoItems([...todoItems,newTodo])
    setTodo("")
  }
  return (
    <div id='todolist'>
      <h1>Todo list</h1>
      <input type='text' value={todo} placeholder='Todo' onChange={handleTodoChange} />
      <button onClick={gnan}>Add Todo</button>
      <div id='todo_container'>
        {console.log(todoItems)}
        {todoItems.map((todoItem) => <Todolist key={todoItems.id} setTodoItems = {setTodoItems} todoItems = {todoItems} item = {todoItem} />)}
      </div>
    </div>
    
  );
}
 
  


export default App;
