import useForm from "../hooks/useForm";
import TaskModel from "../models/TaskModel";

const InputComponent = ({newTaskHandler}) => {
    const [form, handlerChangeForm, handlerResetForm] = useForm({taskname: ""});
    const {taskname} = form;
    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerResetForm();
        if (taskname !== '') {
            const taskModel = new TaskModel(taskname);
            newTaskHandler(taskModel);
        }
    }
    return <div>
        <form onSubmit={handlerSubmit}>
            <input type="text" name="taskname" onChange={handlerChangeForm} value={taskname} placeholder="write some task" />
            <input className="submitButton" type="submit" value="create task"/>
        </form>
    </div>
}
export default InputComponent;