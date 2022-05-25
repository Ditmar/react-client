const TaskComponent = ({tasks, deleteTaskHander,  updateTaskHandler}) => {
    const {id, taskName, date, state} = tasks;

    return (
    <div className="task">
        <p className={ state?'textThrough': ''} onDoubleClick={() => {
            updateTaskHandler(id);
        }}>
        {taskName}
        </p>
        <div>
            <button className="button" 
            onClick={() => {
                deleteTaskHander(id)
            }}>delete task</button>
        </div>
    </div>)
}
export default TaskComponent;