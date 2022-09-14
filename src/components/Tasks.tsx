import Task from "./Task";

const Tasks: React.FC<{tasks: any[], onDelete: (id:string)=> void, onDoneTask: (id:string)=>void}> = (props) =>{
    return <div className="tasks">
        {props.tasks.map(task => <Task onDelete={props.onDelete} onDoneTask={props.onDoneTask} key={task.id} task={task}/>)}
    </div>
}

export default Tasks;