import Task from "./Task";

const TaskList = ({tasks}) => {

    //breaking up array of tasks into indiviual tasks
    const taskComponent = tasks.map(task => {
        return(
            <Task tasks={task} key={task.id}/>
        )
    })


    //returning thetask components from above
    return(
        <div className="task-list">
            {taskComponent}
        </div>
    )

}

export default TaskList;