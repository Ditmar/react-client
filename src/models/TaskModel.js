class TaskModel {
    id = '';
    taskName = '';
    date = null;
    state = false;
    constructor(taskName) {
        this.taskName = taskName;
        this.id = Date.now().toString("16");
        this.date = Date.now();
    }
}
export default TaskModel;