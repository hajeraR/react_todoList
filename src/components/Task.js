const Task = ({tasks}) => {

    //returning individual tasks with its properties
    return (
        <div className="task">
            <h3>Description:</h3>
            <p>{tasks.description}</p>
            <h4>Priority:</h4>
            <p>{tasks.priority}</p>
            <h4>Completed?</h4>
            <p>{tasks.completed ? "Yes" : "No"}</p>
        </div>
    )
}


export default Task;