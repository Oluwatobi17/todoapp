const Task: React.FC<{task: {title: string; id: string; done: boolean}, onDelete: (id:string)=> void, onDoneTask: (id:string)=> void}> = (props) =>{

    const handleDoneTask = () =>{
        props.onDoneTask(props.task.id);
    }

    const handleDelete = () =>{
        props.onDelete(props.task.id);
    }

    return <div className="taskcontainer" onDoubleClick={handleDelete} title="Double tap to delete">
        <input type="checkbox" defaultChecked={props.task.done} onChange={handleDoneTask}/>
        {props.task.title}
    </div>
}

export default Task;