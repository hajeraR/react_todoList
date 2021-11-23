import { useState } from "react";


//controlled component - its own state needs controlling but bot affecting application
//need to update the state of form before pasiing to the task list
const NewTaskForm = ({onTaskSubmission}) => {

    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    //to be able to monitor input change and update the state
    //target.value is tracking the keys netered
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }

    const handleFormSubmission = (event) => {
        //stops the defult actions from happening in this case stops site fromrefreshing
        event.preventDefault();

        //assign values to keys
        const newTask = {
            description: description,
            priority: priority,
            completed: false
        }

        //calling function to update state
        onTaskSubmission(newTask);

        //after submission clear form
        setDescription("");
        setPriority("")

    }

    return (
        <>
            <h2>Add a new task:</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="formElement">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" value={description} onChange={handleDescriptionChange}/>
                </div>
                <div className="formElement">
                <label htmlFor="priority">Priority: </label>
                <input type="text" id="priority" value={priority} onChange={handlePriorityChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </>
    )

}

export default NewTaskForm;