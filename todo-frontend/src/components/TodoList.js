// // src/components/TodoList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './TodoList.css';

// const TodoList = () => {
//     const [todos, setTodos] = useState([]);
//     const [title, setTitle] = useState('');

//     const fetchTodos = async () => {
//         const response = await axios.get('http://localhost:8080/api/todos');
//         setTodos(response.data);
//     };

//     const addTodo = async () => {
//         if (!title) return;
//         const newTodo = { title, completed: false, createdDate: new Date() };
//         await axios.post('http://localhost:8080/api/todos', newTodo);
//         setTitle('');
//         fetchTodos(); // Refresh the list
//     };

//     const deleteTodo = async (id) => {
//         await axios.delete(`http://localhost:8080/api/todos/${id}`);
//         fetchTodos(); // Refresh the list
//     };

//     useEffect(() => {
//         fetchTodos();
//     }, []);

//     return (
//         <div className="todo-container">
//             <h1>Todo List</h1>
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Add a new todo"
//                 />
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <div className="todo-item">
//                             <div>
//                                 <span className="todo-title">{todo.title}</span>
//                                 <span className="todo-date">{new Date(todo.createdDate).toLocaleString()}</span>
//                             </div>
//                             <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState(null); // New state for due date

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:8080/api/todos');
        setTodos(response.data);
    };

    const addTodo = async () => {
        if (!title || !dueDate) return; // Ensure both title and due date are provided
        const newTodo = { title, completed: false, createdDate: new Date(), dueDate };
        await axios.post('http://localhost:8080/api/todos', newTodo);
        setTitle('');
        setDueDate(null); // Reset due date after adding
        fetchTodos(); // Refresh the list
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:8080/api/todos/${id}`);
        fetchTodos(); // Refresh the list
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new todo"
                />
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a due date"
                    className="date-picker"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div className="todo-item">
                            <div>
                                <span className="todo-title">{todo.title}</span>
                                <span className="todo-date">{new Date(todo.createdDate).getDate().toLocaleString()}/{new Date(todo.createdDate).getMonth().toLocaleString()}/{new Date(todo.createdDate).getFullYear()}</span>
                                {todo.dueDate && (
                                    <span className="todo-due-date">Due: {new Date(todo.dueDate).getDate().toLocaleString()}/{new Date(todo.dueDate).getMonth().toLocaleString()}/{new Date(todo.dueDate).getFullYear()}</span>
                                )}
                            </div>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;




// src/components/TodoList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
// import './TodoList.css';

// const TodoList = () => {
//     const [todos, setTodos] = useState([]);
//     const [title, setTitle] = useState('');
//     const [dueDate, setDueDate] = useState(null); // State for due date

//     const fetchTodos = async () => {
//         const response = await axios.get('http://localhost:8080/api/todos');
//         setTodos(response.data);
//     };

//     const addTodo = async () => {
//         if (!title || !dueDate) return; // Ensure both title and due date are provided
//         const newTodo = { title, completed: false, createdDate: new Date(), dueDate };
//         await axios.post('http://localhost:8080/api/todos', newTodo);
//         setTitle('');
//         setDueDate(null); // Reset due date after adding
//         fetchTodos(); // Refresh the list
//     };

//     const deleteTodo = async (id) => {
//         await axios.delete(`http://localhost:8080/api/todos/${id}`);
//         fetchTodos(); // Refresh the list
//     };

//     const toggleCompleted = async (id, currentStatus) => {
//         await axios.patch(`http://localhost:8080/api/todos/${id}`, { completed: !currentStatus });
//         fetchTodos(); // Refresh the list
//     };

//     useEffect(() => {
//         fetchTodos();
//     }, []);

//     return (
//         <div className="todo-container">
//             <h1>Todo List</h1>
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Add a new todo"
//                 />
//                 <DatePicker
//                     selected={dueDate}
//                     onChange={(date) => setDueDate(date)}
//                     dateFormat="yyyy/MM/dd"
//                     placeholderText="Select a due date"
//                     className="date-picker"
//                 />
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <div className="todo-item">
//                             <div>
//                                 <span className="todo-title">{todo.title}</span>
//                                 <span className="todo-date">{new Date(todo.createdDate).toLocaleString()}</span>
//                                 {todo.dueDate && (
//                                     <span className="todo-due-date">Due: {new Date(todo.dueDate).toLocaleString()}</span>
//                                 )}
//                             </div>
//                             <div className="todo-actions">
//                                 <button onClick={() => toggleCompleted(todo.id, todo.completed)}>
//                                     {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
//                                 </button>
//                                 <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;

