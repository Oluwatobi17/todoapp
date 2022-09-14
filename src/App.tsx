import './App.css';
import React, { useState, useEffect } from 'react';

import NewTodoForm from "./components/NewTodoForm";
import Tasks from "./components/Tasks";

type Todo = {
	title: string,
	id: string,
	done: boolean
}


const App = () =>{
	const [tasks, setTasks] = useState<Todo[]>([]);
	const [initialized, setInitialized] = useState<boolean>(true);

	// retrieve the tasks from localstorage
	useEffect(()=>{
		let storedTasks: string = localStorage.getItem('tasks') || '';
		if(storedTasks.length > 0){
			setTasks( JSON.parse(storedTasks) );
			setInitialized(false);
		}
	}, []);

	// handle new changes
	useEffect(()=>{
		if(initialized) return;
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks, initialized]);

	const handleNewTodo = (todo: string | undefined) =>{
		if(todo===undefined) return;

		const newtodo = {
			title: todo,
			id: new Date().valueOf().toString(),
			done: false
		}
		setTasks(prev => [newtodo, ...prev]);
	}

	const handleDoneTask = (id: string) =>{
		const modified = tasks.map(task => {
			if(task.id !== id) return task;

			return {...task, done: !task.done};
		});
		setTasks(modified);
	}

	const handleDelete = (id: string) =>{
		const modified = tasks.filter(task => task.id !== id);
		setTasks(modified);
	} 

	return <main>
		<h1>My TS Todo List</h1>
		<NewTodoForm onAdd={handleNewTodo} />

		<Tasks tasks={tasks} onDelete={handleDelete} onDoneTask={handleDoneTask} />
	</main>
}

export default App;
