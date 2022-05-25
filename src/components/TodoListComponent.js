import TaskComponent from "./TaskComponent";

const TodoListComponent = ({list, deleteTaskHander, updateTaskHandler}) => {
    return (
        <div className="listContainer">
            {list.map(item => <TaskComponent 
            key={item.id} 
            tasks={item} 
            deleteTaskHander={deleteTaskHander}
            updateTaskHandler={updateTaskHandler}
            />)}
        </div>
    )
}
export default TodoListComponent;