import {useState, useEffect} from 'react';
import todos from "../todos";
import Tasklist from "../components/TaskList";
import NewTaskForm from '../components/NewTaskForm';

const ToDoContainer = () => {

    const [tasks, setTasks] = useState([]);

    //fetching data from database
    const getTaskData = () => {
        fetch("http://localhost:8080/tasks")
        .then(response => response.json())
        .then(data => setTasks(data))
    }

    useEffect(getTaskData, []);

    //fetch database, specify request type and json input type, turn body input into string from json, call function
    const addNewTask = (newTask) => {
        fetch("http://localhost:8080/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(getTaskData)
    }

    //fetch 
    const updateTaskCompletion = (id) => {
        console.log("updating " + id);
        const taskToUpdate = tasks.find(task => task.id === id);
        taskToUpdate.completed = true;
        fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskToUpdate)
        })
        .then(getTaskData);
    }

    return(
        tasks.length >0?

        <>
            <NewTaskForm onTaskSubmission={addNewTask} />
            <hr/>
            <Tasklist tasks={tasks} onTaskCompletion={updateTaskCompletion}/>
        </>
        :
        <p>loading...</p>
    )

}

export default ToDoContainer;