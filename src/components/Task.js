const Task = ({tasks, onTaskCompletion}) => {

    //returning individual tasks with its properties
    return (
        <div className={tasks.completed? "task completed": "task"}>
            <h3>Description:</h3>
            <p>{tasks.description}</p>
            <h4>Priority:</h4>
            <p>{tasks.priority}</p>
            <h4>Completed?</h4>
            <p>{tasks.completed ? "Yes" : "No"}</p>
            <hr/>
            {/*need to use annoymous function because function needs parameter */}
            <button onClick={() => onTaskCompletion(tasks.id)}>mark complete</button>
        </div>
    )
}


export default Task;