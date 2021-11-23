import {useState, useEffect} from 'react';
import todos from "../todos";
import Tasklist from "../components/TaskList";
import NewTaskForm from '../components/NewTaskForm';

const ToDoContainer = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(todos);
    }, []);

    const addNewTask = (newTask) => {
        newTask.id = tasks.length + 1
        setTasks([...tasks, newTask]);
    }

    return(
        tasks.length >0?

        <>
            <NewTaskForm onTaskSubmission={addNewTask} />
            <hr/>
            <Tasklist tasks={tasks}/>
        </>
        :
        <p>loading...</p>
    )

}

export default ToDoContainer;